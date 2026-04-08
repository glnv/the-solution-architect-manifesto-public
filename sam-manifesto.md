# The Solution Architect Manifesto

A solution architect creates the overall technical vision for a specific solution to a business problem.

The manifesto is a statement of beliefs that are deemed indispensable in order to be a successful solution architect* in the field of analytics, data, martech, etc.

The initial version of the solution architect manifesto was created by [Glenn Vanderlinden](https://www.linkedin.com/in/glennvanderlinden/), co-founder at [Human37](https://human37.com). It is based on ~10 years experience and is heavily influenced by working with some of the most brilliant solution architects from leading analytics companies and vendors in the field.

The objective of this manifesto is to become a reference in the analytics, martech & data industry. Therefore **all solution architects or equivalent roles are invited to contribute**. Contributing to the solution architect manifesto is possible via Github which at the same time also represents the manifesto's changelog**. The manifesto now belongs to the web and the community of solution architects out there.

*note that the concepts can be transferred into similar roles and that solution architect is merely a reference title
**note that the repo owner remains the curator of the entries made by the community.

---

## Principles

*None of the following should be considered as the absolute truth but merely as a reference point for solution architects, current and aspiring. The order of these beliefs is of no particular order.*

### 1. Assume a client's briefing is incomplete

Clients will share the problem from their perspective or role. This means that the briefing you receive is more often than not incomplete. ***Do not assume that the problem that is presented is the actual problem to be solved***. Be aware of this and explore additional perspectives. Never assume, always validate.

### 2. Articulate the problem, then work it

In order to provide the correct solution for a problem, the problem must be articulated precisely. Kidlin's law reminds us why this is important:

> "If you write the problem down clearly, then the matter is half solved."

To do so, be relentless on the details and the use of words. ***Words make up our perception of reality therefore it is important to be precise***. Repeat your understanding of the problem back to the briefing party as a recap in order for both parties to agree upon the exact and precise description of the problem at hand. Use visual aids such as (digital) whiteboards if needed to support your interpretation.

Another way of thinking about this phase of articulating the problem can be found in Ben Horowitz' book "the hard thing about hard things" on page 124 even though he attributes the quote to Tony Robbins.

> "If you don't know what you want, the chances that you'll get it are extremely low."

In other words — confirm with the client they have a crystal clear idea about what they want. This can be the problem to be solved or the desired outcome a solution should generate. If this is not clear your first task is to help them articulate this. Otherwise it will be nearly impossible for you to create a satisfactory outcome.

Once the problem has been articulated clearly and precisely you can start to "work the problem". Working the problem is a concept brought to my attention by [Chris Hadfield](https://en.wikipedia.org/wiki/Chris_Hadfield) in his book "[An astronaut's guide to life on earth](https://www.goodreads.com/book/show/18170143-an-astronaut-s-guide-to-life-on-earth)."

> "Working the problem" is NASA-speak for descending one decision tree after another, methodically looking for a solution until you run out of oxygen.

Apply this by deconstructing the problem into smaller pieces and solving them individually. ***There is no such thing as a single problem. Every problem is a composition of smaller problems***. Once the problem has been scoped clearly, you can work the problem by solving each of the sub-problems.

### 3. Meetings are for working the problem

Meetings are part of working the problem. It is a misconception that the purpose of a meeting is to "brief" or simply "update" and that the actual work happens outside of the meeting in isolation. Consider every meeting, including the initial briefing, an opportunity to get closer to the solution you seek. Problem solving happens with the client as he/she (unknowingly) holds most, if not all, of the info required to obtain a deep understanding of the problem and, as a result, the required solution. ***Progress should be booked after every meeting***. This can take the form of having a better understanding of the problem, the discovery of new paths to explore or paths being crossed off.

### 4. Always be exploring, always be testing

A solution architect stops being a solution architect when he/she ceases to explore. You must be comfortable discovering the unknown. ***Solution architects are not necessarily hired to "know", they are hired to find out***. We live for the search and clients hire us to end theirs.

Make sure you have a sandbox. It is a laboratory where both exploration and validation happen. Don't provide client advice purely based on a hypothesis or non-validated documentation. "Did you test it?" is a rhetorical question you should ask yourself every time a recommendation is made or a solution shipped.

### 5. Answers ≠ solutions

You can provide answers without solving the problem. You will encounter this often when engaging with vendor support. Unfortunately it is a mistake many solution architects are guilty of making.

Example — you tried to solve a business question using a specific feature within an analytics platform. However, this approach failed and you logged a support ticket as a result. Support might tell you that what you are trying to achieve is not possible with this feature as it does not function in the way you expected it to. Support then elaborates on the constraints of the feature and its inner workings. In this example the support team has answered your question, but the problem remains unsolved.

***While answers are a response to a question. Solutions are a response to a problem***. Don't make the mistake of assuming your job is done by providing an answer. If the path towards a solution is blocked, don't take no for an answer but provide an alternative solution.

### 6. Ticket immediately

Ticket immediately in cases where additional support is required internally/externally. Internal/external resources often rely on their specific service level agreements (SLAs) towards your request that require them to provide a first response within a specific timeframe (e.g. 24 hours). The longer you wait to log a ticket, the longer you will have to wait to receive an answer. As a result, the longer it takes to get to a final solution for the problem.

Here's an example — imagine you realise at 10h00 that you need external resources to help you solve a problem. Waiting 6 hours before logging (logging at 16h00) means that getting an answer to your question is potentially delayed by 6 hours under a 24 hour SLA as your support line has up until 16h00 the next day to reply. Logging a ticket immediately at 10h00 however ensures you have a first response before 10h00 the next day. Not only will this ensure that the solution is reached faster, it also means it reduces the potential risk of breaking your SLA versus the client. Therefore ***ticket immediately when depending on resources outside of your control***.

### 7. Look for patterns

At the solution design level:

A solution is a combination of different smaller solutions. Think of them as modules or patterns that can be reused as part of your next solution in an alternative context.

***Consider every solution you ever designed as a set of patterns that can be reused to solve future problems, even if the context, tool or client changes***.

At the tool level:

Tools operate on patterns. Take the principles of event design for instance. Recognising patterns upon which tools are built allows you to go from "I can do tool X, not tool Y" to "I master pattern A, and that is transferable to tool X, Y and Z".

***If you master the patterns upon which tools are built you can "easily" switch between tools. This approach prevents lock-in.***

### 8. Check, double-check, deploy and check again

Run sanity checks before deploying a solution. Double-check. Then check again once everything is in production.

A practical example of this applied to an analytics setup would be:

- Check your setup before you deploy.
- Double-check or go through peer review.
- Verify that all data comes in properly once deployed in production.

This principle is preceded by the "did you test it?" check mentioned earlier.

### 9. Simplicity is the ultimate sophistication

Choose simplicity over complexity. Both in the design of the solution and in the communication of the solution. Avoid buzzword or keyword stuffing at all times. Simple is better.

> "Make it as complex as you need to, not as complex as you can."

We can borrow an idea from philosophy called Occam's razor:

> "Occam's razor is the problem-solving principle that recommends searching for explanations constructed with the smallest possible set of elements." In other words: the simpler explanation of an entity is to be preferred.

### 10. Document or perish

Always provide minimum viable documentation. Documentation ensures consistency when operating the solution as well as knowledge transfer when team composition changes. ***Solutions are not final as long as they have not been documented***. Don't worry about what documentation should look like (Confluence, Notion, Google doc, ...). Just make sure that creating and updating documentation is an easy task. The act of documenting is more important than the form it takes.

### 11. Remember all measurements are proxies

All data is a proxy, a representation of something else. Some proxies provide valuable insights; others can mislead. What works today may not tomorrow. A solution architect must always question the proxy — what does this data really represent, is the way that we're calculating it valid, and is it still useful?

Data points on a dashboard or lines on a chart are measurements, not truths. It's easy to fall into the trap of hyper-focusing on metrics without considering their context or relevance. A metric that served as an effective proxy for business success at one point may not tell the whole story as circumstances change.

For example, 0-60 mph times are a common metric in car performance testing, but as automakers began optimizing for this specific metric (using features like launch control), it no longer told the full story of a car's real-world performance. In response, Car and Driver now tests both 0-60 and rolling start-to-60 times. Interestingly, rolling start times often turn out slower, revealing a more accurate picture of performance when the artificial advantages are taken away.

Regularly challenge and reassess whether the data you're interpreting still reflects reality. ***Ask yourself: what is this data really saying?*** Don't stick to outdated proxies just because you want a clean time-series of data. Ensure your recommendations are based on a true understanding of what the data suggests, rather than just what the dashboard displays.

### 12. Accept that sometimes no solution exists (yet)

Not every problem will yield to the tools, time, budget, data, or technology at your disposal. Part of the architect's responsibility is to recognise true impossibility — or disproportionate cost/benefit — early, communicate it transparently, and explore alternative paths: reframing the problem, reducing its scope, postponing it until conditions change, or deciding consciously to live with it. Declaring "no solution" is not defeat; it is intellectual honesty that preserves resources and trust for challenges that can be solved.

### 13. Show, don't tell

Use visual aids to explain a solution or problem. ***A picture is worth a thousand words***.

If possible and appropriate show what a solution could look like in the form of a demo or mock-up. Remember — ***real pros do live demos***.

---

## Contributors

- [Cruz, Ian](https://www.linkedin.com/in/ianagcruz/) | ex-Mixpanel
- [Kola, Kal](https://www.linkedin.com/in/kal-kola/) | Segment
- [Pandoo, Merveen](https://www.linkedin.com/in/merveen-pandoo/) | Mixpanel
- [Radu, Mihai](https://www.linkedin.com/in/mgradu/) | Amplitude
- [Rushton, Ward](https://www.linkedin.com/in/ward-rushton/) | evolv Consulting
- [Solito, David](https://www.linkedin.com/in/david-solito-774b2a14/) | Adwire
- [Vandenbussche, Maxime](https://www.linkedin.com/in/maxime-vandenbussche-bb852365/) | Human37
- [Vanderlinden, Glenn](https://www.linkedin.com/in/glennvanderlinden/) | Human37