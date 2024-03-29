package handler

import (
	"encoding/json"
	"log"
	"net/http"
	"net/url"
	"github.com/PuerkitoBio/goquery"
)

type DribbbleImage struct {
	Url   string
	Image string
}

var dribbblePosts []DribbbleImage

func Handler(w http.ResponseWriter, r *http.Request) {
	dribbblePosts = []DribbbleImage{}

	response, err := http.Get("https://www.dribbble.com")
	if err != nil {
		log.Fatal(err)
	}
	defer response.Body.Close()

	document, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		log.Fatal("Error loading Http response body.", err)
	}

	document.Find(".shot-thumbnail").Each(processElement)

	js, err := json.Marshal(dribbblePosts)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "s-maxage=3600")
	w.Write(js)
}

func processElement(index int, element *goquery.Selection) {
	href, hrefExists := element.Find("a").Attr("href")
	image, imageExists := element.Find("img").Attr("src")

	dribbbleImage := DribbbleImage{"", ""}

	if hrefExists {
		dribbbleImage.Url = href
	}
	if imageExists {
		dribbbleImage.Image = StripQueryString(image)
	}

	dribbblePosts = append(dribbblePosts, dribbbleImage)

}


func StripQueryString(inputUrl string) string {
	u, err := url.Parse(inputUrl)
	if err != nil {
			panic(err)
	}
	u.RawQuery = ""
	return u.String()
}