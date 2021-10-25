package handler

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
	"regexp"
	"github.com/PuerkitoBio/goquery"
)

type GitRepository struct {
	Url   string
	OwnerName string
	RepositoryName string
	Description string
	StarsToday string
}

var repositories []GitRepository



func Handler(w http.ResponseWriter, r *http.Request) {
	repositories = []GitRepository{}

	language := r.URL.Query().Get("language")
	response, err := http.Get("https://github.com/trending/" + language + "?since=daily&spoken_language_code=en")
	if err != nil {
		log.Fatal(err)
	}
	defer response.Body.Close()

	document, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		log.Fatal("Error loading Http response body.", err)
	}

	document.Find("article").Each(processElement)

	js, err := json.Marshal(repositories)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "s-maxage=3600")
	w.Write(js)
}

	func processElement(index int, element *goquery.Selection) {
		
		href, hrefExists := element.Find("h1 a").Attr("href")
		starsToday  := element.Find("span.d-inline-block.float-sm-right").Text()
		description  := element.Find("p").Text()

		if hrefExists {
			 link :=  strings.Split(href, "/")
			 ownerName := link[1]
			 repositoryName := link[2]
			 starsTodayRegex, _ := regexp.Compile(`([0-9])\w+`)
			 startsTodayCount := starsTodayRegex.FindString(starsToday)
			 gitRepo := GitRepository{href, ownerName, repositoryName, description, startsTodayCount}
			 repositories = append(repositories,gitRepo)
		}
	}