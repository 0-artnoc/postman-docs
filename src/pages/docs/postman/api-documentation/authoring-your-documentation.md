---
title: "Authoring your documentation"
order: 68
page_id: "authoring-your-documentation"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Documenting your API"
    url: "/docs/postman/api-documentation/documenting-your-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.getpostman.com/case-studies/Imgur.pdf?_ga=2.207421525.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Public API documentation"
    url: "/docs/postman-for-publishers/public-api-docs/"

warning: false
---

You can include information in your API documentation using [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Postman will [populate various parts of your documentation](/docs/postman/api-documentation/documenting-your-api/#including-detail-in-your-docs) from the information associated with the relevant collection. Your Markdown content can include standard structures and formatting such as headings, lists, images, links, bold / emphasis, code samples, blockquotes, and tables.

## Contents

* [Documenting with descriptions](#documenting-with-descriptions)
* [Describing collections](#describing-collections)
* [Documenting request detail](#documenting-request-detail)
    * [Parameters and headers](#parameters-and-headers)
* [Using examples in your docs](#using-examples-in-your-docs)
* [Documentation links](#documentation-links)
* [Using images in docs](#using-images-in-docs)
* [Markdown demo collection](#markdown-demo-collection)
* [Next steps](#next-steps)

## Documenting with descriptions

You can add descriptions to [various places](/docs/postman/collections/using-markdown-for-descriptions/) within your collections and requests, and they will appear in your documentation. You can include descriptions for [collections](#describing-collections), [requests, parameters, and headers](#documenting-request-detail).

## Describing collections

You can include Markdown descriptions in your documentation, for collections and the requests within them.

You can add a description when you create a collection, or by selecting the collection and using the arrow button (&#9654;).

![Add Description](https://assets.postman.com/postman-docs/add-collection-description.jpg)

> When you include block elements, leave an empty line before and after to avoid any rendering issues.

## Documenting request detail

You can provide a description when you create a new request or for an existing request at any time.

When you create a new request using the __New__ button, you will be prompted to provide a name and description (which can include Markdown), both of which will appear in your documentation.

<img alt="Request Description" src="https://assets.postman.com/postman-docs/new-request-detail.jpg" width="500px"/>

To add a description to an existing request, open the request in Postman and edit the request detail.

<img alt= "Edit Request" src="https://assets.postman.com/postman-docs/edit-request.jpg" width="350px"/>

![Request Description](https://assets.postman.com/postman-docs/edit-request-description.jpg)

Descriptions will appear in the request section in your documentation.

<img alt="Request Description in Docs" src="https://assets.postman.com/postman-docs/request-in-docs.jpg" width="350px"/>

### Parameters and Headers

You can add a description to the parameters and headers in your requests—for people viewing the request inside Postman (for example if you're working on a shared collection), or for anyone viewing your documentation.

![Parameter Description](https://assets.postman.com/postman-docs/param-desc.jpg)

 The description will appear in your docs, in the request __Params__ and __Headers__ sections, next to the parameter or header name.

<img alt="Header Description in Docs" src="https://assets.postman.com/postman-docs/header-desc-docs.jpg" width="500px">

## Using examples in your docs

You can include [example](/docs/postman/collections/examples/) request and response data in your collections, and they will appear in your documentation.

Any body data included in your request will appear in the endpoint section of your documentation.

![Body Data](https://assets.postman.com/postman-docs/body-json.jpg)

You can also create an example to use for a request.

![Add Example](https://assets.postman.com/postman-docs/add-example.jpg)

Any data you include in the example will appear in the docs example code sidebar, including body and response data.

![Body Example](https://assets.postman.com/postman-docs/body-example.jpg)

![Examples in Docs](https://assets.postman.com/postman-docs/examples-in-docs.jpg)

> Example code includes cURL, Go, Ruby, Python, NodeJs, PHP, C, C#, JavaScript, Java, HTTP, Swift, and Shell.

## Documentation links

You can link to headers within your generated documentation, including the introduction, requests, folders, and responses.

The links are generated from your documentation using IDs. To find a link, click the relevant section in the left sidebar and you'll see it in your browser address bar (or right-click and copy the link). You can then link directly to doc page sections using this link.

<img alt="Documentation Links" src="https://assets.postman.com/postman-docs/doc-links.jpg" width="400px"/><br/>

> You cannot link to another part of the documentation by manually creating an ID.

## Using images in docs

You can include any image you have hosted online in your documentation. Use the Markdown image syntax as follows:

```md
![Image Alt Text](https://your-image-location.com)
```

## Markdown demo collection

You can use the Postman Markdown collection to see some [Markdown styling](https://documenter.getpostman.com/view/4630964/S1LsXVJy) inside Postman and rendered in the web documentation.

![markdown reference](https://assets.postman.com/postman-docs/59188697.png)

You can also see examples of documentation published using Postman collections by browsing the templates. Click __New__, select the __Templates__ tab, choose a template, and click __View Documentation__.

![Template Docs](https://assets.postman.com/postman-docs/template-docs.jpg)

> The [Postman API documentation](https://docs.api.getpostman.com/?version=latest) is authored using Postman.

## Next steps

To make your documentation publicly available, check out [Publishing your docs](/docs/postman/api-documentation/publishing-public-docs/).
