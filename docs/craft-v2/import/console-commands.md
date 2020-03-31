# Console Commands

Import or seed data from the command line with Sprout Import's console commands.

From the root of your Craft project, run the `./craft` command to see a list of all available commands. For more details on a specific command, run: ` craft help <command-name>`.

If you do not trigger your queue automatically, be sure to run the `./craft queue/run` command after you have added new items to the queue.


## sprout-import/import/run

```
./craft sprout-import/import/run --file="@root/import.json" --seed=true
./craft sprout-import/import/run --file="path/to/import.json path/to/import2.json path/to/import3.json" --seed=true
```

The `sprout/import/run` command allows you to queue one or more file imports. 

## sprout-import/seed/generate

```
./craft sprout-import/seed/generate --element="craft\elements\Entry" --settings="channel=news" --quantity="3"
./craft sprout-import/seed/generate --element="barrelstrength\sproutbaseimport\importers\elements\Entry" --settings="channel=news" --quantity="3"
```

The `sprout-import/seed/generate` command allows you to seed data to supported Elements.

Settings may be required to seed an element and can be provided as a string that will get processed into key value pairs. A key and value must be separated by an equals sign:
 
 ```
 --settings="channel=news"
 ```
 
 Multiple settings can be separated by a comma: 
 
 ```
 --settings="channel=news,entryType=post"
 ```
