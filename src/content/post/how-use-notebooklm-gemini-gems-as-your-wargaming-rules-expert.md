---
title: How to use NotebookLM and Gemini Gems as your wargaming rules expert
description: "How to use NotebookLM and Gemini Gems as a wargaming rules expert — with real examples from Void Admiral and Altar of Freedom."
pubDatetime: 2026-05-06
modDatetime: 2026-05-10
tags:
  - sci-fi
  - Void Admiral
  - Altar of Freedom
  - American Civil War
  - Gemini
  - NotebookLM
---

There are many ways you can use AI within the wargaming hobby, here are some of the ways I have used it:
1. Understanding the rules. Rules can be complex so it can be handy to get some insight without having to trawl through potentially hundreds of pages of rulebook, errata and FAQ.
2. List generation
3. Strategy help

I have found AI to be particularly useful in #1 though NotebookLM excels at #2 and #3 as well. Google's Gemini and NotebookLM are great tools for creating your own rules expert.

Every time I buy a new ruleset I now always buy the PDF version as well as the printed version. Then I can create a NotebookLM notebook and upload the rules PDF as well as any other material like FAQs, scenario books and army lists. I then write a note for NotebookLM to tell it about the resources I've uploaded and how to use them. For instance, if I've uploaded an FAQ or errata I tell NotebookLM that those documents are to be used if they contradict the rulebook. Gemini Gems are another way to achieve the same thing. You can build your own mini rules "expert" and even link your NotebookLM notebook as a source.

Once I've created my notebook or gem I have a really valuable resource. I can ask NotebookLM questions or my Gemini Gem about the rules and their interpretation and get back remarkably good answers that reference the relevant parts of my reference material and uses appropriate rules specific terminology.

## Examples

### Void Admiral Turn
Void Admiral is not a complex game, but I still find value in being able to interrogate my Gemini Gem.

I entered the following prompt `Give me a step by step process of a single turn` into a Gemini Gem sourced with the Void Admiral rulebook and the factions all in the form of two PDFs.

> Welcome to the bridge, Admiral. Mastering the turn sequence is the first step toward galactic dominance. In **Void Admiral**, a single turn (round) follows a precise six-step flow to keep the action fast and tactical.
> 
> Here is your step-by-step guide to a single game round:
> 
> ### 1. Recharge Shields
> The first order of business is to restore your defenses. You clear damage from your ships' shields by removing tokens as appropriate, ensuring your vessels are ready to soak up incoming fire.
> 
> ### 2. Roll Command Dice
> Now, set your tactical resources for the turn:
> *   First, **discard** any unwanted dice remaining on your command board from the previous round.
> *   Then, **roll** up to a total of **six command dice** (though some factions, like the Loyalists, may have more).
> 
> ### 3. Deploy Fighter Tokens
> Your carriers and hangars launch their support craft now. Place **one fighter token** next to your ships for every launch bay they possess. Remember, a ship cannot exceed a total number of tokens equal to double its fighter bay count.
> 
> ### 4. Determine Initiative
> Consult your specific scenario to see who starts the game. For all subsequent rounds, the player who **finished activating their entire fleet first** in the previous round gains the initiative.
> 
> ### 5. Activation Phase
> This is the heart of the game. Players alternate selecting a single ship or squadron to activate. Once a ship/squadron is chosen, it follows this strict internal sequence:
> *   **Movement:** Ships move up to their speed in a straight line toward their prow. You may pivot up to 45 degrees after every 4 inches moved.
> *   **Shooting:** After movement, fire all available weapons. Each weapon can be fired once, and you can combine fire from the same weapon types.
> *   **Bombing Runs:** Finally, you may spend fighter tokens to launch bombing runs against targets within 18 inches.
> 
> ### 6. Score Objectives
> Once all ships have been activated, check the scenario objectives. You usually score points by having ships in specific board sectors or meeting mission-critical criteria.
> 
> ---
> 
> **Admiral's Tip:** If you choose not to shoot or board during a ship's activation, you may **"Seal the Hatches"**. This grants the ship **+1 Armour** until its next activation, which is often the difference between a hull breach and a narrow escape.

### Void Admiral Strategy

I used to the following prompt: `I want to play an aggressive play style, what faction would be best and what 15 point list would your recommend?` to find a good faction and list for an aggressive playstyle. This is the result:

> For an aggressive playstyle in **Void Admiral**, you want a fleet that can close the gap quickly, ignore traditional defensive layers, and punish enemies in close-quarters combat.
> 
> ## Recommended Faction: The Brutes
> The **Brutes** (modeled after space pirates and orcs) are the premier choice for aggressive commanders. They excel at "boarding, ramming, and all kinds of fun". 
> 
> *   **Vicious Fighters:** They gain a **+1 bonus to boarding actions**. In Void Admiral, boarding is highly effective when an opponent has full shields or "Sealed Hatches," as it bypasses those defenses to deal direct hull damage.
> *   **Ingenuity:** Despite their scrap-heap appearance, their ships are often surprisingly resilient and optimized for short-range brawling.
> 
> ---
> 
> ## 15-Point Aggressive Fleet List
> In Void Admiral, ship classes have fixed point costs: Heavy (9), Medium (6), Light (3), and Squadrons (1 each). For a tight 15-point list designed to get in the enemy's face, I recommend a "Hammer and Anvil" approach:

| Ship Class | Unit Name | Point Cost | Recommended Loadout |
| :--- | :--- | :--- | :--- |
| **Medium** | "The Butcher" | 6 pts | Cannon Turrets & Heavy Prow |
| **Light** | "Slasher" Frigate | 3 pts | Missile Pods & Boarding Claws |
| **Light** | "Stinger" Frigate | 3 pts | Missile Pods & Boarding Claws |
| **Squadron** | 3x "Scrap" Corvettes | 3 pts | Cannon Turrets |
| **Total** | | **15 pts** | |

> ### Tactical Strategy
> 1.  **The Missile Screen:** Use your **Light Frigates** to fire missiles as you close the distance. Missiles are key for aggressive lists because they **bypass shields** entirely.
> 2.  **The "Scrap" Swarm:** Use your 3-ship **Squadron** to harass larger enemy vessels. Because squadrons follow loose formation rules, they can "snake" around terrain to avoid being picked off before they get into range.
> 3.  **The Boarding Blow:** Once you are within range, do not just shoot. Use the Brutes' **+1 boarding bonus** to seize or destroy enemy ships. 
> 4.  **Ramming Speed:** If a ship is heavily damaged, remember that **self-destruction is automatic** in boarding and can be used as a final act of defiance to take a larger enemy ship down with you.
> 
> Would you like a breakdown of how to use the Command Board to specifically buff this fleet's boarding capabilities?

There you go, a simple list, a faction and recommendations for how to best use it on the tabletop. For a beginner with Void Admiral like me, that's a great start.

### Altar of Freedom List
I created a notebook with the [Altar of Freedom](https://www.6mmacw.com/) American Civil War rulebook and the eastern theatre scenario PDFs.

I then asked `Create an order of battle for the confederate side at the battle of Manassas`.

This is the response NotebookLM gave:

> At the **Battle of First Manassas** on July 21, 1861, the Confederate forces consisted of the **Combined Confederate Armies**, specifically the **Army of the Potomac** and the **Army of the Shenandoah**. While General Joseph E. Johnston was senior in rank, he deferred overall command to **General P.G.T. Beauregard** for the engagement because Beauregard was more familiar with the terrain and defensive organization.
> 
> According to the sources, the Confederate order of battle is organized as follows:
> 
> ### **Army Commanders**
> *   **General P.G.T. Beauregard** (Tactical Command)
> *   **General Joseph E. Johnston**
> 
> ### **Beauregard’s Division (Army of the Potomac)**
> *   **Bonham Brigade** (+3 Strength Modifier)
> *   **Early Brigade** (+2 Strength Modifier)
> *   **Ewell Brigade** (+2 Strength Modifier)
> *   **Evans Brigade** (-2 Strength Modifier)
> *   **Jones Brigade** (+3 Strength Modifier)
> *   **Holmes Brigade** (-2 Strength Modifier)
> *   **Longstreet Brigade** (+2 Strength Modifier)
> *   **Cocke Brigade** (-2 Strength Modifier)
> *   **Kemper Artillery** (+0 Strength Modifier)
> *   **Rosser Artillery** (+0 Strength Modifier)
> *   **Garnett Artillery** (+0 Strength Modifier)
> 
> ### **Johnston’s Division (Army of the Shenandoah)**
> *   **Jackson Brigade** (+3 Strength Modifier)
> *   **Bartow Brigade** (-2 Strength Modifier)
> *   **Bee Brigade** (+0 Strength Modifier)
> *   **Smith Brigade** (-2 Strength Modifier; arrives as reinforcement at 12:00pm)
> *   **Stuart Cavalry** (-3 Strength Modifier)
> *   **Pendleton Artillery** (+0 Strength Modifier)
> 
> ***
> 
> **Historical and Technical Notes:**
> *   **Army Structure:** The sources describe the Confederate organization as being divided into **two large, unwieldy divisions**. 
> *   **Army Morale:** The Confederate army is classified as "**steady**" with a **breakpoint of 5**. This means the army would be forced to quit the field if it lost 5 or more elements, such as brigades, generals, or HQs.
> *   **Strength Modifiers:** The numbers in parentheses (e.g., +3 or -2) are modifiers reflecting the size and experience of the units relative to the average brigade size of **2,100 men**.
> *   **Victory Objectives:** To win, the Confederates were tasked with either breaking the Union army or contesting control of **Centreville**.
> 
> To visualize this, imagine the Confederate side as a **partnership between two distinct companies** that have joined forces for a specific project: Beauregard brought the local expertise and the bulk of the staff, while Johnston arrived with additional specialized teams to bolster the effort.

## Conclusion
The barrier to entry for AI is incredibly low. All of the tools I've used here are free. You just need a free google account (and, if you have a gmail account you already have one) and you can head over to [Gemini](https://gemini.google.com/app) or [NotebookLM](https://notebooklm.google.com) and start using them now. I've used other tools like Claude and you'd have no problem using it to do something similar. You can create a project and add sources to that. I'm not familiar with ChatGPT but I'd wager you can do something similar there.

I suppose a big question is, does AI add to the hobby? I think it has added to my enjoyment of the hobby by making new rules more accessible and by extension wargaming genres easier to enter. I can't say that I particularly enjoy the nitty gritty of learning sometimes quite complex rulesets, so anything that can reduce the learning curve is going to be gratefully received here. One of the accusations sometimes thrown at AI is that it can make you really lazy by deferring all of your thinking to it. I do not do that. I do not use AI at the gaming table, I just use it to help me learning the rules, giving me a head start into creating a list or a bit of strategy. That's it.

Are we heading to time when there is more AI use in the wargaming hobby. Very probably. I don't think it will all be bad. It would be handy to be able to solo wargame with a convincing opponent. If we are all going to have a rule expert in our pocket, then that's going to be useful. It might reduce the load on your club's rule lawyer somewhat.

On the other hand, when I play I want to play against a real person. Not against their AI. I haven't seen any sign of AI seeping into club sessions as yet so we'll have to see how this develops.