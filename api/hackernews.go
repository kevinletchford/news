package handler

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

type Link struct {
	Url   string
	Text  string
	Score string
}

var links []Link
var doc *goquery.Document

func Handler(w http.ResponseWriter, r *http.Request) {

	links = []Link{}

	client := &http.Client{}

	request, err := http.NewRequest("GET", "https://news.ycombinator.com/", nil)
	request.Header.Set("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36")

	response, err := client.Do(request)

	if err != nil {
		log.Fatal(err)
	}
	defer response.Body.Close()

	document, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		log.Fatal("Error loading Http response body.", err)
	}

	doc = document

	doc.Find(".athing").Each(processElement)

	js, err := json.Marshal(links)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "s-maxage=3600")
	w.Write(js)
}

func processElement(index int, element *goquery.Selection) {

	storyLink := element.Find(".storylink")

	href, hrefExists := storyLink.Attr("href")
	id, idExists := element.Attr("id")

	linkData := Link{"", "", ""}

	if hrefExists {
		linkData.Url = href
		linkData.Text = storyLink.Text()
	}

	if idExists {
		scoreId := "#score_" + id
		scoreText := doc.Find(scoreId).Text()
		score := strings.Replace(scoreText, " points", "", -1)
		linkData.Score = score
	}

	links = append(links, linkData)

}
