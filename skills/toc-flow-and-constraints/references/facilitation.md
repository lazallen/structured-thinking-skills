# Flow and Constraints — facilitation detail

## Contents

1. Opening stance
2. Classify the system
3. Find — outcome
4. Map the flow
5. Find — constraint
6. Improve — Optimize
7. Improve — Coordinate, Collaborate, Curate
8. Improve — Upgrade
9. Close — check-back and scope
9a. Measuring improvement (only if asked)
10. Proportionate short sessions
11. Hand-offs to other methods
11a. Mapping to Goldratt's Five Focusing Steps
12. Language choices (rationale)

## 1. Opening stance

State that this is **Flow and Constraints**: finding what limits end-to-end throughput in a recurring system, and what to change next — not a one-off project plan, and not a causal “what’s going wrong and why?” tree.

Start with exactly: “Describe the process you want to look at.” Do not add the outcome or a suspected constraint to that first question.

Ask one focused question at a time. Mirror the emerging outline before extending it. Prefer evidence from queues and doers over status tools and distant maps. Do not hunt the constraint until the flow is visualised (section 4).

Activation often uses process / speed / flow / throughput / bottleneck / queue language. You still open Find with a lightweight outcome check so the group does not optimize a local maximum.

## 2. Classify the system

Before deep mapping, classify:

| Signal | Stay / hop |
| --- | --- |
| One-off delivery with a date, dependency network, handoffs between scarce people | Suggest **Critical Chain** — switch; do not blend |
| Repeatable process (feature/outcome delivery, deploy, experiment, support) | Stay in Flow |
| Process runs often vs rarely; high vs low variation | Shape how precise the map needs to be — wild variation argues for ranges, not fake averages |

For repeatable processes, work at a **generalisable** level: “delivering product outcomes,” not one named feature. Frequency and variation should shape the session, not the method name.

## 3. Find — outcome

Capture, in the human’s words:

- What desirable outcome is unfulfilled today?
- When is it **delivered and validated** (not merely “shipped”)?
- How does this outcome serve the **wider organisation**? A flow that is efficient against a goal nobody else values is a local maximum.
- Is the system in scope the **value-producing** pipeline, the **improvement** pipeline that makes that pipeline better, or both? Name which.

This is a *lightweight* check, not goal architecture. A sentence or two the group recognises is enough to proceed.

End-to-end means from unfulfilled desire to validated outcome or learning. Building code is often easier than shared clarity about what should be built and why — if specification is where value stalls, that belongs on the map.

If the goal itself is contested or needs CSF/NC structure, offer a **Goal Tree** hop rather than forcing a full goal architecture inside Flow.

## 4. Map the flow

Do this **before** naming the constraint. Queues, waits, and who clears them only become visible once the process is on the page. A constraint named before the map is a guess.

### Work as done

Map what people **actually** do. Treat maps from leaders distant from delivery as hypotheses until doers correct them.

| Kind | Treat as |
| --- | --- |
| Work as imagined | Hypothesis |
| Work as prescribed | Hypothesis |
| Work as done | Primary evidence |

Start with **one** target workflow and **one** person’s or team’s real process. Others interrogate and clarify — do not have everyone map a separate process in parallel.

Build the picture in this order, mirroring it back as it grows:

1. The real steps, end to end.
2. Who or what does each step (people, teams, finite capacities — never “resources”).
3. Doing time versus waiting. Annotate waits on the arrows.
4. Where work queues, including ranges where the length varies.
5. Why each material delay exists.

### Doing vs waiting

- Distinguish active work time from elapsed waiting.
- Annotate waits on the arrows between steps (typical delay, or a range).
- Ask **why** each material delay exists. “Design review takes three weeks” is a symptom; causes may be scarce reviewers, fixed submission windows, missing early input, or rework loops.
- Map action steps (specify, build, validate, deploy, run, analyse) but expect the delay to sit **between** them.

### Reviews and consultation

Reviews are a recurring source of waiting and rework, so give them their own attention:

- Identify the **small number of people** who genuinely shape the decision, and involve them earlier in specification and design.
- A large review audience is not a large group of decision-makers. Most attendees are there to be informed; naming the difference shrinks scheduling delay.
- Reviews held late without blocking implementation are acceptable **only** if the feedback does not cause expensive rework.
- **Rework after a review is a concrete flow failure** — put it on the map rather than treating it as normal cost.

### People and capacity

- Name real people, teams, and finite capacities — never “resources.”
- A step may need several people (especially specify/design); elapsed time often comes from coordinating them.
- If an **interchangeable** group owns a stretch of the flow, internal sequence may matter less than their shared priorities.
- If a **specialist** is required at one step and work queues specifically for them, they are a stronger constraint candidate.
- More distinct roles, teams, specialist capabilities, and handoffs → more potential bottlenecks.

### Variation

- Constraints can be unstable (“wild”); intensity and location can move.
- Process variation creates queues even without a single failure — like traffic with no accident.
- Represent variable queues as **ranges** (for example “2–6 items waiting”), not false precision.
- Unpredictable queue lengths also undermine planning, because nobody can say when capacity will free up. Say so rather than averaging it away.

### Completeness

A lightweight visual model is useful even when incomplete, if the group treats it as a model: “we disagree here,” “we don’t know,” “we need evidence.” Do not demand a perfect end-to-end map. Incomplete is fine; unnamed-before-mapped is not.

Stop mapping once the waits, queues, and who clears them are visible enough to compare. Then go to section 5.

## 5. Find — constraint

Only now. A system always has a constraint. The aim is not to eliminate bottlenecks forever; it is to improve flow and then re-identify where the constraint moved.

**What a constraint is**

- Someone or something with **finite capacity** (a person, team, shared platform), **or**
- The **market** (insufficient demand relative to available capacity — top-of-funnel).

**What a constraint is not**

- An abstract problem statement
- A process stage label alone
- A Jira (or other tool) status

**Evidence**

1. Look for **queues**: where work waits longest or accumulates.
2. Connect each material queue to **who or what clears it**.
3. Ask which of those capacity holders most limits **overall** throughput — not which local step is slowest.
4. Validate with people who do the work. Wrong constraint = wasted improvement.

If a map shows only actions, the waiting is in the arrows. Queues and waits are often more diagnostic than the activity boxes.

**When no queue is obvious.** If work is not visibly piling up anywhere, check two things before concluding there is no constraint:

- **Market constraint.** Is there capacity sitting available because not enough valuable demand arrives? Signals: people available or filling time with low-value work, thin top-of-funnel, shipped work that nobody asked for. Then the constraint is demand, and improvement moves go toward what creates or qualifies it.
- **Hidden queues.** Waiting can hide inside a single step (a person juggling several things), in elapsed calendar time nobody records, or outside the mapped system entirely. Ask doers where their work actually sits idle.

**Ask why that capacity is constrained.** Naming who or what is only half of Find. Work through the likely causes:

| Why | Looks like |
| --- | --- |
| Capacity | Simply not enough hours or people with that capability |
| Prioritisation | They are pulled onto other work ahead of this flow |
| Dependency | They wait on someone or something else before they can act |
| Coordination | Several people must align; elapsed time is scheduling, not working |
| Quality gates | Reviews, approvals, compliance steps concentrate on them |
| Shared platform / tool limits | A finite system everyone needs at once |
| Policy | A rule creates the load or the wait (see below) |

The why determines which improvement moves are even available, so do not skip it.

**Policy / rules:** if people explain the constraint with a policy (“we must get twelve signatures”), treat that as a **why** that can create a capacity bottleneck. Stay in Flow while the group can still change load, sequencing, or demand on the capacity. Hop to CRT/Cloud only when the binding rule is significantly **outside the group’s control** (third-party regulation, core customer promise they cannot alter, etc.).

Finding the correct constraint matters disproportionately. Challenge confident but unvalidated nominations.

**When the group arrives already naming one.** Do not accept it and do not argue with it. Map enough of the flow (section 4) to test it: if the queues and waits do not sit on that capacity, say so and follow the evidence. A wrong constraint wastes every improvement that follows.

### Required outline contents

Whether or not you draw a diagram, capture — in this order, because that is the order you learned them:

1. Desired outcome / validated end-point  
2. Real steps (work as done)  
3. Wait vs doing  
4. People / teams / finite capacities  
5. Queues (with ranges if variable)  
6. Named constraint and evidence  
7. Why (including policy-as-why if relevant)  
8. Improvement moves chosen  
9. Check-back time  

## 6. Improve — Optimize

Do **not** optimize every part of the system. Local speed-ups outside the constraint often do not raise end-to-end throughput.

Once the constraint is named, Optimize first — cheapest, most local, changing **how the constraint itself works**:

- What does the constrained person/team/capacity do that it does **not** need to do — duplicate steps, rework, habits that add nothing?
- What interrupts it or pulls it away from the constrained work?
- What small process tweak, tool, or training would let it get through the same work faster or with less rework?

Optimize changes how the constraint works, not what is sent to it. Leave sequencing, handoffs, and early involvement for **Coordinate**. Leave moving supporting work off the specialist for **Collaborate**. Leave filtering and prioritising what reaches the bottleneck for **Curate**.

**Who makes the change?** When a move could sit under Optimize or Curate, ask who acts. If the constraint changes its own way of working, it is Optimize. If the people or rules upstream change what reaches the constraint — fewer items, different routing, a no — it is Curate. For example, a reviewer skimming low-risk changes faster is Optimize; the team no longer sending low-risk changes to that reviewer is Curate.

If non-constrained people are busy while a major queue sits on the constraint, the question is not how to make the busy people more efficient — it is what they can do to **help** the constraint (via the peer prompts below).

## 7. Improve — Coordinate, Collaborate, Curate

These three are **peer prompts** for how the rest of the system subordinates to the constraint (Goldratt’s Subordinate step, in human language). Order among them is **flexible**; run the prompts that fit. All come before Upgrade.

| Prompt | Practical meaning | Example moves |
| --- | --- | --- |
| **Coordinate** | Sequencing, handoffs, early involvement | Involve the few people who truly shape design earlier; shrink “informed audience” vs decision-makers; ready the input before it hits the constraint |
| **Collaborate** | Move supporting work off the specialist | Data prep or drafting done by others; specialist keeps only what only they can do |
| **Curate** | Whoever feeds the bottleneck filters, prioritises, redirects, or says no before work reaches it | Route only consequential items through scarce review; don’t burn constrained experimentation capacity on trivial changes; send some requests to an alternative route |

**Batching** is contextual: smaller batches help some flows; combining related changes helps when the constrained stage has high fixed overhead. Decide from the constraint’s economics, not a slogan.

## 8. Improve — Upgrade

Upgrade means adding capacity or capability: hiring, vendors, tools, platform investment. Do it **last**, because it costs money and/or lead time.

Only after Optimize and the Coordinate/Collaborate/Curate prompts have been honestly tried (or clearly cannot help enough).

## 9. Close — check-back and scope

Ask explicitly: **When will we check back in on this?**

- The constraint will move; improvement without revisit is theatre.
- Agree who looks, how soon, and what signal means “re-Find.”
- If both value-producing and improvement pipelines were discussed, record which system’s constraint you addressed.

Mirror back: outcome, constraint, evidence, moves chosen, and check-back time. Do not present the outline as verified beyond what the group actually checked.

## 9a. Measuring improvement (only if asked)

Do not teach this unprompted, and do not turn the session into an accounting exercise. If someone asks how to tell whether flow actually improved, use these three measures and stop:

| Measure | Meaning |
| --- | --- |
| **Throughput** | Validated value the system produces. Commercially, often sales minus truly variable cost. In knowledge work, validating the value is the hard part. |
| **Inventory** | Money or effort tied up inside the system: unfinished work, queues, work waiting to be validated. More of it is not progress. |
| **Operating expense** | What it costs to keep the system running, including people's time. |

A real improvement raises throughput without quietly inflating inventory or operating expense. Local speed, more releases, and higher utilization are not substitutes for that. This skill does not build Throughput Accounting worksheets.

## 10. Proportionate short sessions

When time is limited, use the **same order** as the full path, with a thinner map. The short path is not a licence to name the constraint first.

1. Seed a simple workflow model (or reuse one).  
2. Ask participants to place the **people** involved.  
3. Ask where **queues** are.  
4. Find the queue that most limits throughput.  
5. Ask what the **rest of the system** can do to protect, support, or reduce demand on that constraint.

Let people add a missing step if needed, but do not spend the session mapping every activity. Essential questions:

1. Where does work queue or wait?  
2. Who or what is it waiting for?  
3. Is that the queue that most limits throughput?  
4. What can the rest of the system do about it?  

Keep the exercise lightweight enough that people will do it again.

## 11. Hand-offs to other methods

Suggest these; do not blend them into the Flow session.

| Signal | Suggest |
| --- | --- |
| One-off project date / dependency / capacity-adjusted longest path | **Critical Chain** |
| Contested goal, or the group needs a success structure under it | **Goal Tree** |
| Binding why is a rule/conflict significantly outside group control; several bad effects with no causal model yet | **Current Reality Tree** / **Cloud** |
| Enduring both/and tension, not a constraint to elevate away | **Polarity management** |
| Flow symptoms need causal/policy explanation before focusing | Start with **CRT**, then return to Flow |

### What those methods are

An agent facilitating Flow does not need to run them, but should describe them accurately when offering a hop:

| Method | One line |
| --- | --- |
| **Critical Chain** | Plans and controls a one-off piece of work: dependencies, handoffs, the longest path once people's capacity is accounted for, and buffers. |
| **Goal Tree** | Lays out a goal with the critical success factors and necessary conditions beneath it — the structure of what must be true to succeed. |
| **Current Reality Tree (CRT)** | A cause-and-effect diagram built from undesirable effects (UDEs — bad conditions people can observe) down to root causes. Answers "what is going wrong and why?" |
| **Cloud** | A TOC conflict diagram: one objective, two needs, two conflicting actions, and the assumptions holding the conflict in place. |
| **Polarity management** | Handles tensions where both sides stay necessary over time, so neither is "solved." |

## 11a. Mapping to Goldratt's Five Focusing Steps (on request only)

Use the plain voice by default. If someone asks how this relates to classic Theory of Constraints, give the mapping:

| Goldratt | Here | Note |
| --- | --- | --- |
| Identify | **Find** | Outcome check, then the map, then the constraint — the map is how Identify happens |
| Exploit | **Optimize** (and part of **Curate**) | Get more from the constrained capacity as it is. Classic Exploit also covers not wasting constraint time on work that adds no throughput; here that is split by who acts — the constraint changing its own work is Optimize, others filtering what reaches it is Curate |
| Subordinate | **Coordinate / Collaborate / Curate** | One Goldratt step, split into three practical prompts for how the rest of the system acts |
| Elevate | **Upgrade** | Add capacity or capability |
| Repeat (don't let inertia become the constraint) | **Check-back** | Agree when to look again, because the constraint moves |

Do not switch into Exploit/Subordinate language for the rest of the session just because the mapping was requested.

## 12. Language choices (rationale)

These choices are intentional practice decisions, stated here so an agent can follow them without any other context:

- **Find / Optimize / Coordinate / Collaborate / Curate / Upgrade** over Exploit / Subordinate / Elevate in default speech — manufacturing-era words land badly when the constraint is a person; purpose stays “protect and improve constrained capacity; align the rest around it.”
- **People / capacity / capability** — never “resources.”
- **Policy is a why**, not automatically a separate constraint type to chase in v1.
- **Market can be the constraint** — insufficient demand is in scope.
- **Validated value** over release count or utilization as the throughput story in knowledge work.
- **Flexible order** among Coordinate / Collaborate / Curate; strict-ish order Optimize → those three → Upgrade.
- **Check-back is mandatory closing**, not optional politeness — continuous Find after the constraint moves.
