package handler

import (
	"encoding/json"
	"net/http"

	"github.com/mmcdole/gofeed"
)

type Link struct {
	Title   string
	Link string
}

var links []Link

func Handler(w http.ResponseWriter, r *http.Request) {
	
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL("https://tympanus.net/codrops/collective/feed/")
	
	for _, item := range feed.Items {
		links = append(links, Link{item.Title,item.Link})
	}

	js, err := json.Marshal(links)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
