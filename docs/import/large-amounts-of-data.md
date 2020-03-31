# Importing Lots of Data

Sprout Import supports importing one or more json files via the **Import via Files** field on the Import tab.

Be aware of the size of the files that you are trying to import. Importing large files may fail for several reasons. If your import didn't work, check your logs.

## Logs

Some logs to check:

``` html
storage/logs/queue.log
storage/logs/web.log
```

## Batch Size

To avoid memory issues or file size issues when importing your data, it's a good practice to break your data into several smaller JSON files that don't cause issues with the file size and memory limits in your environment. Each JSON file uploaded will be added to a queue and handled via Craft Tasks one at a time.