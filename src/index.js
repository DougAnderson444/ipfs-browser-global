import { use, CID as cid } from "./IPFS.js"

// (async () => {
//   await use()
// })()
export const CID = cid

export default async (config = {}) => {
    await use(config)

    // Now you can use ipfs globally to do things like

    // const ipfsNode = ipfs // bind the prop to the global
    // const identity = await ipfsNode.id()
    // const nodeId = identity.id
    // console.info("nodeId", nodeId)
    // const rootCID = await ipfs.dag.put(saveObject, { pin: true })

    // const res = await ipfs.dag.get(rootCID)
    // console.log(res.value)
}
