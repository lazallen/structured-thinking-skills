# Critical Chain — facilitation detail

## Contents

1. Goal test
2. Working backwards
3. Estimating: duration and complexity
4. Finding the critical chain
5. Compression
6. Buffers
7. Review rhythm and revisits
8. Intent and control signals during the work
9. Several projects sharing people

## 1. Goal test

State that this is Critical Chain planning for getting something done quickly — not diagnosis, and not a check on whether this is the right thing to build.

Capture one to three goal statements in the human's words. A goal passes when:

- it says **what** will be achieved and **why** it matters;
- it says **how we will know** it has been achieved;
- it has a **date**;
- it is clear enough that the people doing the work could make good decisions **without step-by-step instructions** — including when circumstances change;
- it is **not a task list in disguise** ("build X, then Y, then Z" with no why).

If the human hedges, keeps rewording, or can't say why the goal matters, the goal is not clear yet. Help sharpen it before mapping; a denser map never fixes an unclear goal.

These tests draw on intent-based leadership (Stephen Bungay, *The Art of Action*): plans fail when the intent behind them is unclear, however detailed the plan.

## 2. Working backwards

Start from the goal's end state and repeatedly ask: *"What would need to happen immediately before this, for this to start?"*

- Record each **handoff** explicitly: who or what must finish before the next step can start.
- Ask early: **"Who could stop us at the end?"** Security, legal, compliance, governance, or a key stakeholder who hasn't been consulted. Put their reviews on the map as steps. Late reviews are a classic failure: they come back with more change than expected and blow up the plan.
- If the network is uncertain, say so. Don't invent false precision; keep refining as the human corrects the map.

## 3. Estimating: duration and complexity

For each step, ask three things: a **rough duration**, **who** does it, and a **complexity rating**.

**Duration.** Working time if people can focus on the step. Ask for the honest, focused figure, without the safety margin people normally pad in; the safety goes into buffers later (section 6). Keep three things separate and visible: the estimate, the safety, and where the safety is placed.

**Complexity.** Liz Keogh's [Estimating Complexity](https://lizkeogh.com/2013/07/21/estimating-complexity/) scale rates how much we — and the world — don't know. Ask it 5-first:

| Rating | Meaning |
| --- | --- |
| 5 | Nobody in the world has done this before. |
| 4 | Someone in the world has done this, but not in our organisation. |
| 3 | Someone in our organisation has done this, or we can get the expertise. |
| 2 | Someone in our team knows how to do this. |
| 1 | We all know how to do this. |

- The scale measures **ignorance, not effort**. A short step can be a 5.
- Rate across **people, technology, and process**. A step can be a 4 on people (we've never worked with this stakeholder) and a 1 on technology. Use the highest.
- A duration on a 4 or 5 is a guess, not a commitment. Say so.
- 1–3 means the expertise exists somewhere. Before accepting a 4, check whether someone has already solved it; it may really be a 3.
- Flag 4s and 5s on or feeding the chain as risks.

**Sanity-check the goal with the ratings** (from Keogh's [Capability-based Planning and Lightweight Analysis](https://lizkeogh.com/2013/09/05/capability-based-planning-and-lightweight-analysis/)):

- **No 4s or 5s at all?** Ask what is different about this effort. If nothing is, buying it or partnering with someone who has done it may beat building it.
- **Several 4s and 5s?** There may be more than one goal here. Can one be delivered without the other?

## 4. Finding the critical chain

The critical chain is the longest sequence of dependent steps once capacity conflicts are resolved.

1. Lay out the steps in dependency order with their durations.
2. Find **capacity conflicts**: steps that need the same person or capability at the same time.
3. Resolve each conflict by putting those steps one after the other.
4. Find the longest remaining sequence through to the goal. That is the critical chain. Steps that merge into it from outside are **feeding chains**.

The critical chain is often longer than the critical path (dependencies alone), and it often runs through a scarce person or capability. If two sequences are about equally long, pick one as the critical chain and protect the other with a feeding buffer.

## 5. Compression

Once a draft chain exists, look for ways to shorten it:

| Move | Notes |
| --- | --- |
| Move reviews earlier | Ask for reviews while change is still cheap |
| Do the riskiest first | Pull 4–5 rated steps forward as quick, rough experiments to get feedback early. If everything in scope is needed, order by risk, not value. Optionally ask how each experiment could plausibly fail, so it is safe to fail |
| Run steps in parallel | Only where the dependencies genuinely allow it |
| Cut scope | Only where the goal still holds |
| Protect scarce capacity | Don't spread constrained people across many things at once |
| Remove waiting | Look for idle gaps and queues on the chain |
| Single-task chain work | Switching between tasks stretches every one of them |

Two working habits keep the chain moving:

- **No per-step due dates.** Start a chain step as soon as it can start, finish it as fast as quality allows, and hand it on immediately. Per-step deadlines turn early finishes into waiting.
- **Don't release work early** just because people are free; released work competes with the chain. Once a chain step can start, start it.

Refuse quality cuts for speed, except in a proof of concept that will be thrown away.

## 6. Buffers

Place buffers only after the chain exists. Ask, rather than leading with formulas:

1. Where are we **already** putting buffers, hidden or explicit?
2. Where do we **need** protection for the promise or the chain?
3. Which estimates are longer than the work logically needs (local padding)?
4. What is starting **too late** — especially reviews by people outside the team?

Then place:

- **Project buffer** — at the end of the critical chain, before the promised date. Protects the promise.
- **Feeding buffer** — where each feeding chain joins the critical chain. Protects the chain from late feeders, and lets feeders start a little early.
- **Capacity buffer** — an alert to a scarce person ahead of their chain step ("you're needed in about 3 days"), so they are ready. Not calendar time.

Size buffers by judgement and conversation; this skill uses no fixed sizing formula. Steps rated 4–5 on the chain argue for more protection.

**Buffer remaining** = (target date − today) − remaining duration on the critical chain. Calculate it at every revisit.

## 7. Review rhythm and revisits

Critical Chain is an ongoing management tool, not a one-off plan. Before work starts, agree:

- **who** reviews progress on the chain;
- **how often** (daily for short efforts, weekly for longer ones);
- **what triggers replanning** (for example, buffer remaining falls below an agreed level, a 4–5 experiment fails, or a new dependency appears).

At each revisit:

- What moved on the critical chain since last time?
- What waiting appeared?
- How much buffer remains, and how is it trending?
- Did a review or a capacity conflict threaten the chain?
- Did any 4–5 experiment change what we know (and our estimates)?
- Does the chain itself need redrawing?

## 8. Intent and control signals during the work

Watch for signals that the problem is the goal or the way the work is being led, not the map:

- **People on the chain can't restate the goal** or don't know which decisions are theirs. Adding steps won't help; the goal and decision rights need another conversation.
- **Control slides into over-monitoring:** daily check-ins beyond the agreed rhythm, excessive reporting, breaking work into ever-smaller tasks to watch it, or analysis paralysis. Name the pattern with a question ("What's driving the extra check-ins?") and return to the agreed rhythm.

Name the signal, help the human address it briefly, then return to the chain. This skill is not a leadership-coaching session.

## 9. Several projects sharing people

When the same people work across several projects, the capacity conflict between projects is often the real constraint. Starting everything at once spreads scarce people thin and slows every project. Suggest staggering project starts around the scarcest capacity, and finishing work before starting more.
