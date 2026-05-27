---
title: "Conversations, minutes, tokens — what each one actually means."
slug: "conversations-minutes-tokens-explained"
category: "product"
excerpt: "An honest explainer of how Nexus² is metered, why we sell conversations instead of tokens, and how it translates."
publishedAt: "2026-05-05"
readTime: 5
author: "austin"
tags: ["pricing", "metering", "transparency"]
---

Most AI products bill in tokens. Tokens are a unit your finance team can't reason about and your product team can't predict. So we don't.

We bill in **conversations** and **voice minutes**. Here's the honest math.

## The translation

- **1 conversation** ≈ 15,000 tokens (about a 10-message back-and-forth, including the system context Nexi needs).
- **1 voice minute** ≈ 4,000 tokens (speech in, speech out, plus the small layer of retrieval that happens mid-call).
- **1 search query** ≈ 1,500 tokens (the question plus the answer with citations).

These are real averages from production traffic, not marketing numbers.

## Why we don't charge for tokens

> If your bill changes when your prompt gets a paragraph longer, your team will spend the next quarter optimising the wrong thing.

Tokens are an implementation detail. Conversations and minutes are what your customers experience. Your bill should track the second, not the first.

## What's included

Every conversation includes:

- Retrieval from your connected data
- Tool calls (lookups, bookings, escalations)
- Memory across the full session
- The full audit trail

No surprises. No "per tool call" line items. No tokens at midnight.

## Credits don't carry forward

One thing to know: unused conversations don't roll over month-to-month. We size your plan to your actual traffic and check in quarterly to make sure it still fits.

That's the whole model. No asterisks.
