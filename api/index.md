package main

import (
	"log"
	"net/http"

	"github.com/PuerkitoBio/goquery"
)

type Link struct {
	Url  string
	Text string
}

func main() {
	client := &http.Client{}

	req, err := http.NewRequest("GET", "https://news.ycombinator.com/", nil)
	req.Header.Set("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36")

	resp, err := client.Do(req)

	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	document, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		log.Fatal("Error loading Http response body.", err)
	}

	println(resp.StatusCode)
	println(document.Text())

}
