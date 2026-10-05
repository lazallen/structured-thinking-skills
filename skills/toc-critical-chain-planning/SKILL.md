---
name: toc-critical-chain-planning
description: Plans and controls getting something done quickly using Critical Chain — a goal clear enough to act on, backward dependency and handoff mapping, rough durations with complexity ratings, the capacity-adjusted critical chain, compression, buffers, and a regular review rhythm. Use when the user asks for Critical Chain planning, needs to hit a date and keeps being surprised by handoffs, has reviews landing late and blowing the plan, or needs the longest path once people’s availability and capacity are accounted for. Not for diagnosing why things go wrong, checking whether we are building the right thing, or generic task lists.
---

# Critical Chain planning

Help a person plan and control **getting something done quickly** when the real limits are the dependencies between steps and the capacity of the people who do them. Then keep using the plan as a management tool until the work is done.

Call the method **Critical Chain** (it is also known as Critical Chain Project Management, or CCPM).

## Language

- Never call people "resources." Say people, roles, capabilities, and **capacity** (what people bring and when they are available).
- What the literature calls a "resource buffer" is a **capacity buffer** here.

## Key terms

| Term | Meaning |
| --- | --- |
| **Goal** | What we are trying to achieve and why, how we will know, and by when. It has to pass the goal test in step 1 before mapping starts. |
| **Step** | A piece of work with a clear finish that something else waits on. |
| **Dependency / handoff** | Step B cannot start until step A finishes. Often A and B are done by different people, so the work changes hands. |
| **Duration** | Rough working time for a step if people can focus on it. Ask for it *without* the safety margin people usually add; safety is handled by buffers. |
| **Complexity rating** | How much we don't know about a step, on Liz Keogh's 1–5 scale (see step 3). Ratings of 4–5 mean the duration is a guess, not a commitment. |
| **Capacity conflict** | Two steps need the same person or capability at the same time, so one has to wait. |
| **Critical path** | The longest sequence of dependent steps, ignoring who does them. |
| **Critical chain** | The longest sequence of dependent steps *after* capacity conflicts are resolved. It sets the earliest realistic finish, is often longer than the critical path, and often runs through a scarce person. |
| **Feeding chain** | Steps not on the critical chain that merge into it. |
| **Buffer** | Explicit, shared safety time. Safety padded into every step tends to get used up — work expands to fill the time, and people start late because they know there is slack — so Critical Chain takes the padding out of individual steps and pools some of it where it protects the whole chain. |
| **Project buffer** | Sits at the end of the critical chain, before the promised date. Protects the promise. |
| **Feeding buffer** | Sits where a feeding chain joins the critical chain. Stops a late feeder from delaying the chain. |
| **Capacity buffer** | An early warning so a scarce person is ready when the chain reaches their step. Not calendar time. |
| **Buffer remaining** | (Target date − today) − remaining duration on the critical chain. If it heads toward zero, the promise is at risk. |

## When to use

**Use** for planning and ongoing control of a bounded effort with a goal and a date.

**Don't use** for diagnosing why things keep going wrong (a Current Reality Tree does that), for checking whether we are building the right thing (a Future Reality Tree, Goal Tree, or impact map does that), or for generic task lists and ticket hygiene.

## Workflow

Ask one focused question at a time. Mirror the map back before extending it. Detail for every step is in [references/facilitation.md](references/facilitation.md).

1. **Frame a goal that passes the goal test.** Before mapping, the goal must say what will be achieved and why it matters, how we will know, and by when — and be clear enough that the people doing the work could make good decisions without step-by-step instructions. A vague goal or a task list in disguise fails; help sharpen it first. A denser map never fixes an unclear goal.
2. **Work backwards from the goal.** Repeatedly ask: *"What would need to happen immediately before this, for this to start?"* Backward questioning finds real dependencies; planning forwards means guessing a route through a map you can't see yet. Ask early **who could stop us at the end** (security, legal, compliance, a key stakeholder) and put their reviews on the map as steps.
3. **Estimate each step:** a rough duration, who does it, and a complexity rating (Liz Keogh's [Estimating Complexity](https://lizkeogh.com/2013/07/21/estimating-complexity/) scale, asked 5-first):
   - **5** — Nobody in the world has done this before.
   - **4** — Someone in the world has, but not in our organisation.
   - **3** — Someone in our organisation has, or we can get the expertise.
   - **2** — Someone in our team knows how.
   - **1** — We all know how.

   Flag 4s and 5s as risks to the chain.
4. **Find the critical chain.** Resolve capacity conflicts by putting steps that need the same person or capability one after the other, then find the longest remaining sequence.
5. **Compress the chain.** Move reviews earlier, do the 4s and 5s first as quick experiments, run steps in parallel only where the dependencies really allow it, cut scope where the goal still holds, protect scarce people from being spread across many things, and remove waiting. Prefer finishing chain work over starting more work. **Never cut quality for speed** unless the work is a proof of concept you will throw away.
6. **Place buffers** once the chain exists. Ask where safety is already hidden, where protection is needed, which estimates are longer than the work logically needs, and what is starting too late — especially reviews. Then place project, feeding, and capacity buffers, and calculate buffer remaining.
7. **Agree a review rhythm:** who reviews progress, how often, and what triggers replanning. Agree it up front so control is trusted rather than ad hoc.
8. **Revisit** on that rhythm: what moved on the chain, what waiting appeared, how much buffer remains, and whether the chain itself needs redrawing.

## Artefacts

- Goal statement (passing the goal test)
- Backward dependency and handoff map, with the critical chain marked
- Duration, complexity rating, and who does it on each step; 4–5s flagged
- Project, feeding, and capacity buffers, plus buffer remaining
- The agreed review rhythm
- Mermaid diagram — on a **Miro** board via the Miro MCP server when available, otherwise a local HTML viewer that must show **Diagram rendered**. Conventions: [references/viz.md](references/viz.md).

## Collaboration

Prefer a shared Miro board for the map (suggest the human installs the Miro connector for their agent if it is missing). Otherwise suggest screen sharing while the agent interviews, and update the map live. The person managing the work owns revisiting it, day after day or week after week.

## Boundaries

- No fever chart (a chart of buffer used against chain completed): calculate buffer remaining instead.
- No formal buffer-sizing formulas; size buffers by judgement and conversation.
- The goal test checks the goal is clear enough to plan against; it is not a full coaching session on leadership or intent.
