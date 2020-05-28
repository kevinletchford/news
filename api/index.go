package main
package handler

import (
	"fmt"
	"log"
	"net/http"

	"github.com/PuerkitoBio/goquery"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hello from Go!</h1>")

	response, err := http.Get("https://www.dribbble.com")
	if err != nil {
		log.Fatal(err)
	}
	defer response.Body.Close()

	document, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		log.Fatal("Error loading Http response body.", err)
	}

	document.Find(".dribbble-link").Each(processElement)


}

func processElement(index int, element *goquery.Selection) {
	href, hrefExists := element.Attr("href")
	image, imageExists := element.Find("img").Attr("src")

	if hrefExists {
		fmt.Fprintf(w,href)
	}
	if imageExists {
		fmt.Fprintf(w,image)
	}

}


