package handler

import (
	"encoding/json"
	"net/http"

	"github.com/mmcdole/gofeed"
)

type Link struct {
	Title string
	Link  string
}

var links []Link

func Handler(w http.ResponseWriter, r *http.Request) {
	links = []Link{}
	rssFeed := r.URL.Query().Get("rssfeed")
	if rssFeed == "" {
		return
	}

	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(rssFeed)

	for _, item := range feed.Items {
		links = append(links, Link{item.Title, item.Link})
	}

	js, err := json.Marshal(links)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "s-maxage=3600")
	w.Write(js)
}
