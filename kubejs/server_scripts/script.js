// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

	event.remove({output: 'indrev:tin_sword'})
	event.remove({output: 'indrev:steel_sword'})
	event.remove({output: 'indrev:silver_sword'})
	event.remove({output: 'indrev:lead_sword'})
	event.remove({output: 'indrev:copper_sword'})
	event.remove({output: 'indrev:bronze_sword'})

	event.remove({output: 'indrev:tin_shovel'})
	event.remove({output: 'indrev:steel_shovel'})
	event.remove({output: 'indrev:silver_shovel'})
	event.remove({output: 'indrev:lead_shovel'})
	event.remove({output: 'indrev:copper_shovel'})
	event.remove({output: 'indrev:bronze_shovel'})

	event.remove({output: 'indrev:tin_pickaxe'})
	event.remove({output: 'indrev:steel_pickaxe'})
	event.remove({output: 'indrev:silver_pickaxe'})
	event.remove({output: 'indrev:lead_pickaxe'})
	event.remove({output: 'indrev:copper_pickaxe'})
	event.remove({output: 'indrev:bronze_pickaxe'})

	event.remove({output: 'indrev:tin_axe'})
	event.remove({output: 'indrev:steel_axe'})
	event.remove({output: 'indrev:silver_axe'})
	event.remove({output: 'indrev:lead_axe'})
	event.remove({output: 'indrev:copper_axe'})
	event.remove({output: 'indrev:bronze_axe'})

	event.remove({output: 'indrev:tin_hoe'})
	event.remove({output: 'indrev:steel_hoe'})
	event.remove({output: 'indrev:silver_hoe'})
	event.remove({output: 'indrev:lead_hoe'})
	event.remove({output: 'indrev:copper_hoe'})
	event.remove({output: 'indrev:bronze_hoe'})

	event.remove({output: 'indrev:tin_helmet'})
	event.remove({output: 'indrev:steel_helmet'})
	event.remove({output: 'indrev:silver_helmet'})
	event.remove({output: 'indrev:lead_helmet'})
	event.remove({output: 'indrev:copper_helmet'})
	event.remove({output: 'indrev:bronze_helmet'})

	event.remove({output: 'indrev:tin_chestplate'})
	event.remove({output: 'indrev:steel_chestplate'})
	event.remove({output: 'indrev:silver_chestplate'})
	event.remove({output: 'indrev:lead_chestplate'})
	event.remove({output: 'indrev:copper_chestplate'})
	event.remove({output: 'indrev:bronze_chestplate'})

	event.remove({output: 'indrev:tin_leggings'})
	event.remove({output: 'indrev:steel_leggings'})
	event.remove({output: 'indrev:silver_leggings'})
	event.remove({output: 'indrev:lead_leggings'})
	event.remove({output: 'indrev:copper_leggings'})
	event.remove({output: 'indrev:bronze_leggings'})

	event.remove({output: 'indrev:tin_boots'})
	event.remove({output: 'indrev:steel_boots'})
	event.remove({output: 'indrev:silver_boots'})
	event.remove({output: 'indrev:lead_boots'})
	event.remove({output: 'indrev:copper_boots'})
	event.remove({output: 'indrev:bronze_boots'})

	event.remove({output: 'appliedenergistics2:certus_quartz_sword'})
	event.remove({output: 'appliedenergistics2:nether_quartz_sword'})

	event.remove({output: 'appliedenergistics2:certus_quartz_shovel'})
	event.remove({output: 'appliedenergistics2:nether_quartz_shovel'})

	event.remove({output: 'appliedenergistics2:certus_quartz_pickaxe'})
	event.remove({output: 'appliedenergistics2:nether_quartz_pickaxe'})

	event.remove({output: 'appliedenergistics2:certus_quartz_axe'})
	event.remove({output: 'appliedenergistics2:nether_quartz_axe'})

	event.remove({output: 'appliedenergistics2:certus_quartz_hoe'})
	event.remove({output: 'appliedenergistics2:nether_quartz_hoe'})

	event.remove({output: 'appliedenergistics2:certus_quartz_helmet'})
	event.remove({output: 'appliedenergistics2:nether_quartz_helmet'})

	event.remove({output: 'appliedenergistics2:certus_quartz_chestplate'})
	event.remove({output: 'appliedenergistics2:nether_quartz_chestplate'})

	event.remove({output: 'appliedenergistics2:certus_quartz_leggings'})
	event.remove({output: 'appliedenergistics2:nether_quartz_leggings'})

	event.remove({output: 'appliedenergistics2:certus_quartz_boots'})
	event.remove({output: 'appliedenergistics2:nether_quartz_boots'})

	event.remove({output: 'indrev:gamer_axe'})

	event.remove({output: 'betternether:cincinnasite_pickaxe'})

	event.remove({output: 'betternether:cincinnasite_pickaxe'})
	event.remove({output: 'betternether:cincinnasite_pickaxe_diamond'})
	event.remove({output: 'betternether:nether_ruby_pickaxe'})
	event.remove({output: 'betternether:cincinnasite_axe'})
	event.remove({output: 'betternether:cincinnasite_axe_diamond'})
	event.remove({output: 'betternether:nether_ruby_axe'})
	event.remove({output: 'betternether:cincinnasite_hoe'})
	event.remove({output: 'betternether:cincinnasite_hoe_diamond'})
	event.remove({output: 'betternether:nether_ruby_hoe'})
	event.remove({output: 'betternether:cincinnasite_shovel'})
	event.remove({output: 'betternether:cincinnasite_shovel_diamond'})
	event.remove({output: 'betternether:nether_ruby_shovel'}) 
	event.remove({output: 'betternether:cincinnasite_shears'})
	
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})