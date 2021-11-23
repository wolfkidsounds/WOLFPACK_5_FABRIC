// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('item.modification', event => {
	//Modifies existing items
	
	//Wood
	event.modify('minecraft:wooden_sword', item => {
		item.maxDamage = 3
	})
	
	event.modify('minecraft:wooden_sword', tier => {
		tier.uses = 60
		tier.speed = 1.4
	})

	

	//Flint
	event.modify('flintytools:flint_sword', item => {
		item.maxDamage = 4
		item.uses = 90
		item.speed = 1.6
	})

	//Stone
	event.modify('minecraft:stone_sword', item => {
		item.maxDamage = 5
		item.uses = 130
		item.speed = 1.6
	})

	//Copper
	event.modify('indrev:copper_sword', item => {
		item.maxDamage = 5.5
		item.uses = 200
		item.speed = 1.8
	})

	//Iron
	event.modify('minecraft:iron_sword', item => {
		item.maxDamage = 6.0
		item.uses = 300
		item.speed = 1.8
	})

	//Lead
	event.modify('indrev:lead_sword', item => {
		item.maxDamage = 6.0
		item.uses = 500
		item.speed = 1.6
	})

	//Bronze
	event.modify('indrev:bronze_sword', item => {
		item.maxDamage = 6.5
		item.uses = 800
		item.speed = 2.0
	})

	//Diamond
	event.modify('minecraft:diamond_sword', item => {
		item.maxDamage = 7.0
		item.uses = 1500
		item.speed = 1.6
	})

	//Cincinnasite
	event.modify('betternether:cincinnasite_sword', item => {
		item.maxDamage = 7.5
		item.uses = 1300
		item.speed = 1.8
	})

	//Steel
	event.modify('indrev:steel_sword', item => {
		item.maxDamage = 8.0
		item.uses = 900
		item.speed = 2.5
	})

	//Netherite
	event.modify('minecraft:netherite_sword', item => {
		item.maxDamage = 8.0
		item.uses = 2000
		item.speed = 1.8
	})

	//Cincinnasite Diamond
	event.modify('betternether:cincinnasite_sword_diamond', item => {
		item.maxDamage = 9.0
		item.uses = 2200
		item.speed = 2.0
	})

	//Cincinnasite Diamond
	event.modify('betterend:end_crystal_sword', item => {
		item.maxDamage = 9.5
		item.uses = 2500
		item.speed = 2.2
	})

	//Aeternium
	event.modify('betterend:aeternium_sword', item => {
		item.maxDamage = 10.0
		item.uses = 2800
		item.speed = 2.6
	})

	//Soul Alloy
	event.modify('betterend:aeternium_sword', item => {
		item.maxDamage = 12.0
		item.uses = 3000
		item.speed = 3.0
	})
  })