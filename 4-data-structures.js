// Indexed Collections
    // Arrays and Typed Arrays
        /* JS arrays are resizable and can contain a mix of different data types. If you don't want those 
        characteristics, you can use a typed array */
        const countries = [];
        countries.push("Brazil", "USA", "Germany", "Canada");
        console.log(countries.length); // Returns '4'

        // A typed array example
        const typedArray = new Int8Array(3);
        typedArray[0] = 32;
        console.log(typedArray); // Expected output: Int8Array [32, 0, 0]

// Keyed Collections
    // Map
        // It's a simple key/value map and can iterate its elements in insertion order
        const map = new Map();
        map.set("Brazil", "Portuguese");
        map.set("USA", "English");
        map.set("Germany", "German");
        map.set("Canada", "English/French");
        map.size; // Returns '4'
        map.get("USA"); // Returns 'English'
        map.get("Japan"); // Returns 'undefined"
        map.has("Japan"); // Returns 'false'
        map.delete("Brazil");

        for(const [key, value] of map){
            console.log(`${key} speaks ${value}`);
        }
        // Returns:
            // 'Brazil speaks Portuguese'
            // 'USA speaks English'
            // 'Germany speaks German'
            // 'Canada speaks English/French'

        map.clear();

    // WeakMap
        /* The WeakMap API is the same as the Map API, however the WeakMap doesn't allow observing the liveness
        of its keys, meaning it's keys can't be enumerated */
        const weakMap = new WeakMap();
        function Public(){
            const test = {
                // Private data goes here
            };
            weakMap.set(this, test);
        }

        Public.prototype.method = function(){
            const test = weakMap.get(this);
            // Do anything with private data in 'weakMap'
        }

    // Set
        // Set Objects are collections of unique values. You can iterate its elements in insertion order
        const set = new Set();
        set.add(1);
        set.add("Caio");
        set.has(1); // Returns 'true'

        for(const item of set){
            console.log(item);
        }
        // Returns:
            // '1'
            // 'Caio'

    // WeakSet
        /* The difference between Set and WeakSet is that WeakSet are collections of objects only, and not of arbitrary
        values of any type */

// JSON (JavaScript Object Notation)
        // The JSON object contains methods for parsing Javascript Object Notation and converting values to JSON
        // It can't be called or constructed
        JSON.parse();
            /* Parse a piece of string as JSON, optionally transforming the produced value and its properties, and 
            return the value */
        JSON.stringify();
            /* Return a JSON string corresponding to the specified value, optionally including only certain properties
            or replacing property values in a user-defined manner */

        // Example JSON:
        const jsonText = `{
            "browsers": {
                "firefox": {
                    "name": "Firefox",
                    "pref_url": "about:config",
                    "releases": {
                        "1": {
                            "release_date": "2004-11-09",
                            "status": "retired",
                            "engine": "Gecko",
                            "engine_version": "1.7"
                        }
                    }
                }
            }
        }`

        console.log(JSON.parse(jsonText)); // Convert the JSON string into a JS object