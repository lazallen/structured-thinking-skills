# Flow and Constraints — worked example

Illustrative only. It shows the **shape** of a finished flow outline and the kind of questions that produced it — not a template to fill in blindly, and not real doctrine about review teams.

## Session shape

> **Agent:** Describe the process you want to look at.
>
> **Human:** Shipping pricing changes. Everything takes about six weeks and nobody can say why.

Classify: this recurs, so stay in Flow. Work at the level of "delivering pricing changes," not one named change.

Find — outcome (next question, not part of the opener): delivered *and validated* means the change is live and the revenue effect has been measured, not merged. Wider fit: the team's target is revenue per account, so a change nobody measures does not count.

Map the flow before accepting any nomination. The group says "engineering is slow." Putting the steps, the people, and the waits on the page shows otherwise: work sits 8–14 days before design review, and that review is one person who also owns incident response.

Find — constraint, from the map: the design reviewer, not engineering as a stage. Validate the capacity holder, not the ticket status.

Ask why: prioritisation (incident response outranks review) plus quality gates (every change routes through the same review regardless of risk).

## Flow outline

**Desired outcome / validated end-point**
Pricing change live and its revenue effect measured within one reporting cycle.

**Real steps (work as done)**
Draft change → internal pricing sanity check → design review → build → deploy behind flag → measure.
(The formal process also lists a legal step; in practice legal only sees changes above a threshold.)

**Wait vs doing**

| Between | Typical wait | Active work |
| --- | --- | --- |
| Draft → sanity check | 1–2 days | ~half a day |
| Sanity check → design review | **8–14 days** | — |
| Design review → build | 0–2 days | 1 day of review time |
| Build → deploy | 1 day | 3–5 days |
| Deploy → measure | 7 days (reporting cycle) | ~1 day |

**People / teams / finite capacities**
Draft: two PMs. Sanity check: interchangeable analyst group. Design review: one named reviewer (also on incident rota). Build: engineering pair. Measure: data analyst.

**Queues**
2–6 changes waiting for design review at any time. No other material queue.

**Named constraint and evidence**
The design reviewer. Evidence: the only persistent queue; wait dwarfs active time; the same person is pulled to incidents.

**Why**
Prioritisation (incidents outrank review) and quality gates (all changes routed to one reviewer regardless of risk).

**Improvement moves chosen**

- *Optimize:* the reviewer drops the duplicate summary they currently rewrite by hand, and uses a short checklist so routine reviews take minutes rather than an hour.
- *Curate:* PMs stop routing copy-only changes to the reviewer, and send only changes above a risk threshold to human review.
- *Coordinate:* bring the reviewer into the drafting conversation for the two largest changes, so review stops surfacing new objections late.
- *Collaborate:* an analyst prepares the comparison pack the reviewer currently assembles.
- *Upgrade:* not yet — revisit only if the queue persists after the above.

**Check-back**
In three weeks, PM lead checks the review queue length and the sanity-check wait. If the queue has moved elsewhere, re-run Find.

## What makes this outline good enough

- Waits are on the transitions, not buried in the steps.
- The constraint is a capacity holder with evidence, not a stage name.
- The why is named, so the moves follow from it.
- Upgrade is explicitly deferred.
- There is a date and an owner for looking again.
