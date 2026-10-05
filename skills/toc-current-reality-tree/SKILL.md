---
name: toc-current-reality-tree
description: "Facilitate a Theory of Constraints Current Reality Tree to answer what is going wrong and why — including past incidents that systems will repeat. Use when the user asks what is going wrong and why, what happened and why, to build draw or update a CRT or Current Reality Tree, to map causes or root causes, when problems feel connected underneath, when an incident may recur, when multiple undesirable effects (UDEs) appear without a causal model yet, or when someone asserts a single core problem without sufficiency checks."
disable-model-invocation: false
---

# Current Reality Tree

Help the human answer **What is going wrong, and why?**

This includes **what happened, and why** for a past incident. A system does what it is built to do: if it produced an incident once, it will produce it again until the conditions behind it change. A past incident is in scope whenever those conditions still hold.

This skill diagnoses. It does not design solutions.

## What a CRT is

A Current Reality Tree (CRT) is a cause-and-effect diagram of the *unfavourable* part of a situation — not a model of everything. Undesirable effects sit at the top. The conditions that cause them sit underneath, down to root causes at the bottom. Every arrow is a claim that can be tested by reading it aloud: "If [cause], then [effect]."

Most of a tree is chains of these arrows. Two further patterns are worth hunting because leverage often hides in them: **vicious cycles** and **embedded dilemmas**.

## Key terms

| Term | Meaning |
| --- | --- |
| **Undesirable effect (UDE)** | A condition that exists now (or keeps recurring), that people can observe, and that is bad judged against a goal the people involved share. Write it as what is happening ("Customer deliveries are late most weeks"), not as a missing solution ("Lack of a scheduling tool"). If people disagree whether something is undesirable, agree the goal first. |
| **Entity** | One box in the tree: a single condition written as a complete, present-tense sentence. Not an action, a question, or a person. An entity can be the effect of one arrow and the cause of the next. |
| **Sufficiency arrow** | Read "If [cause], then [effect]." It claims the cause is *enough* to produce the effect — not merely that the two occur together. Record any material assumption behind an arrow. |
| **AND (joint causes)** | Two or more causes that produce the effect only *together*: "If [A] and [B], then [C]." Drawn through an AND junction. |
| **Additional cause** | A separate cause that can produce the same effect on its own. Drawn as its own arrow, with no junction. |
| **Root cause** | An entity at the bottom whose own causes are not worth drawing. Prefer root causes that are policies, practices, or behaviours within the influence of the people involved. A root cause is never a person. |
| **Vicious cycle** | A loop: an entity higher in the tree feeds back into one lower down, so the problem reinforces itself. |
| **Embedded dilemma** | Two opposing actions that each seem necessary, usually because each protects a different need that serves the same objective. While the conflict stays unresolved, the UDEs above it persist. In TOC this shape is called a **Cloud** (objective, two needs, two conflicting actions). |
| **Evidence type** | How we know an entity or arrow is true: **observed** (seen first-hand), **reported** (someone told us), **inferred** (reasoned from other facts), or **assumption** (believed, not yet checked). |
| **Categories of Legitimate Reservation (CLR)** | Eight standard tests for a tree's logic — clarity, entity existence, causality existence, cause insufficiency, additional cause, cause-effect reversal, predicted effect, tautology. Each is explained in the workflow reference. |

## Opening

Start with exactly:

> Describe what you think is going on.

Then follow [references/facilitation-workflow.md](references/facilitation-workflow.md).

## Hard duties

1. **Scrutinise every link.** People assert "A causes B" and are often wrong: A may not cause B at all, or B may need C as well as A. Ask questions that help the human test each claim — don't argue. Start with the links that look weakest. Keep the challenge fairly high without becoming an interrogation.
2. **Run a read-aloud sweep near the end of a draft.** Read every arrow back as an "If…, then…" sentence and grade it **weak / plausible / solid** (or 1–5 confidence if the human wants it). Goldratt advised reading trees aloud because the eye skims what the ear catches; the sweep is the systematic version of that.
3. **Hunt vicious cycles.** Once a connected draft exists, ask whether anything higher up feeds back into something lower down. Breaking a loop is usually stronger leverage than fixing a single bottom-most root cause.
4. **Hunt embedded dilemmas.** When one appears, first rank it in the tree as a likely leverage cause. Don't start resolving it mid-diagnosis. Offer dilemma work only once the tree has been reviewed (see the workflow's closing step).
5. **Keep evidence types separate.** Label entities and arrows by evidence type. Never promote an inference or assumption to an observation unless the human says so.

## Diagrams

Draw the tree as editable Mermaid using `flowchart BT`, so root causes sit at the bottom and UDEs at the top. Full conventions, including copy-paste blocks, are in [references/diagrams.md](references/diagrams.md). In short:

- **Nodes:** UDEs yellow (`:::ude`), root causes red (`:::rootCause`), everything else neutral (`:::mid`).
- **AND junctions:** joint causes meet at a small `AND` node before the arrow to their effect.
- **Arrow colour = evidence type:** observed green, reported blue, inferred amber, assumption grey. Arrows graded weak after the sweep are dashed. Vicious-cycle arrows are thick.
- **Evidence notes stay off the boxes:** record each label and its source as `%%` comments in the Mermaid source, so the picture stays uncluttered.

**Prefer Miro** for display and editing: create or update the diagram on a Miro board via the Miro MCP server, and suggest the human installs the Miro connector for their agent if it is missing. Confirm the diagram is on the board and that the Mermaid can be read back.

**Fallback without Miro:** from this skill's directory, check the source and build an HTML viewer:

```bash
node scripts/check-mermaid.mjs <path-to.mmd>
node scripts/render-viewer.mjs <path-to.mmd> <out.html>
```

Open the HTML in a browser. Do not call the diagram done until the page shows **Diagram rendered**.

Self-test for this skill package (needs Chrome or Chromium): `node scripts/ship-check.mjs`.

## Collaboration

Prefer a shared Miro board. Otherwise suggest screen sharing while the agent interviews. Invite scrutiny from people affected by the situation and people with decision rights. Do not send or publish the tree without the human's explicit approval.

## Boundaries

- Diagnosis only — not solution design or implementation planning.
- Not a blame map and not a diagnosis of anyone's personality.
- Never invent the human's diagnosis, and never present a plausible tree as verified.
- Related methods stay separate (see the workflow's hand-offs). Suggest them; don't blend them into the tree.
