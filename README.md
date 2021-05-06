To use, simply:

`npm i github:DougAnderson444/ipfs-browser-global`

then just import it, and use it:

```js
// IPFS saver
import IPFS from 'ipfs-browser-global'
IPFS() // initialize it

// now you'll have access to the global (window.)ipfs object
  async save (saveObject) {
    if (!ipfs) await IPFS()
    const rootCID = ipfs.dag.put(saveObject, { pin: true })
    return rootCID
  }

```

