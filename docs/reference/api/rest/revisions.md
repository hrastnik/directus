---
pageClass: page-reference
---

# Revisions

<div class="two-up">
<div class="left">

Revisions are individual changes to items made. Directus keeps track of changes made, so you're able to revert to a
previous state at will.

</div>
<div class="right">

[[toc]]

</div>
</div>

---

## The Revision Object

<div class="two-up">
<div class="left">
<div class="definitions">

`id` **integer**\
Primary key of the revision.

`activity` **many-to-one**\
Related activity record. Many-to-one to [activity](/reference/api/rest/activity/).

`collection` **string**\
Collection in which this revision happened.

`item` **string**\
Primary key of the item that was changed.

`data` **object**\
Snapshot of the top-level item data.

`delta` **object**\
Snapshot of the changes made in this revision.

`parent` **many-to-one**\
Parent revision that triggered this revision. Many-to-one to revisions (recursive).

</div>
</div>
<div class="right">

```json
{
	"id": 368,
	"activity": 438,
	"collection": "articles",
	"item": "1",
	"data": {
		"title": "Hello World"
	},
	"delta": {
		"title": "Hello from the Docs!"
	},
	"parent": null
}
```

</div>
</div>

---

## List revisions

List all revisions that exist in Directus.

<div class="two-up">
<div class="left">

::: tip Permissions

The data returned in this endpoint will be filtered based on the user's permissions. For example, revisions that apply
to a collection that the current user doesn't have access to are stripped out.

:::

### Query Parameters

Supports all [global query parameters](/reference/api/query).

### Returns

An array of up to [limit](/reference/api/query/#limit) [revision objects](#the-revision-object). If no items are
available, data will be an empty array.

</div>
<div class="right">

### `GET /revisions`

```json
// Response

{
	"data": [
		{
			"id": 368,
			"activity": 438,
			"collection": "articles",
			"item": "1",
			"data": {
				"title": "Hello World"
			},
			"delta": {
				"title": "Hello from the Docs!"
			},
			"parent": null
		},
		{...},
		{...}
	]
}
```

</div>
</div>

---

## Retrieve a revision

List an existing revision by primary key.

<div class="two-up">
<div class="left">

### Query Parameters

Supports all [global query parameters](/reference/api/query).

### Returns

Returns the requested [revision object](#the-revision-object).

</div>
<div class="right">

### `GET /revisions/:id`

```json
// Response

{
	"data": {
		"id": 368,
		"activity": 438,
		"collection": "articles",
		"item": "1",
		"data": {
			"title": "Hello World"
		},
		"delta": {
			"title": "Hello from the Docs!"
		},
		"parent": null
	}
}
```

</div>
</div>
