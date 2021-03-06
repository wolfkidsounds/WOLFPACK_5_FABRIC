tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s ["                        Multiplayer Sleep",{"text":" / ","color":"gray"},"Info                         "]
tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
execute store result score #percent mpSleep.config run gamerule playersSleepingPercentage
execute if score #percent mpSleep.config matches 0 run tellraw @s ["",{"text":">> ","color":"gray"},"1 player in the overworld must sleep to skip the night and the rain."]
execute unless score #percent mpSleep.config matches 0 run tellraw @s ["",{"text":">> ","color":"gray"},{"score":{"name":"#percent","objective":"mpSleep.config"}},"% of players in the overworld must sleep to skip the night and the rain."]
tellraw @s ["",{"text":">> ","color":"gold"},{"text":"[ Personal Settings ]","clickEvent":{"action":"run_command","value":"/trigger mpSleep set 3"},"hoverEvent":{"action":"show_text","contents":{"text":"Click to show personal settings.","color":"gray"}}}]
tellraw @s ["",{"text":">> ","color":"gold"},{"text":"[ List Sleeping Players ]","clickEvent":{"action":"run_command","value":"/trigger mpSleep set 2"},"hoverEvent":{"action":"show_text","contents":{"text":"Click to list sleeping players.","color":"gray"}}}]
tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}