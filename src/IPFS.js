// from:
// https://github.com/Gozala/replicator/blob/default/replicator/src/Service/IPFS.js
//
import IPFS from "./modules/ipfs-core/ipfs-core-v-0-14-1.js"

export const CID = IPFS.CID
export const use =
    /**
     * @returns {Promise<IPFS>}
     */

    async (config) => {
        // @ts-ignore
        const context = /** @type {{ipfs: null|Promise<IPFS>|IPFS}} */ (
            globalThis
        )
        const ipfs = context.ipfs
        if (ipfs == null) {
            const node = IPFS.create(config)
            context.ipfs = node
            const ipfs = await node
            context.ipfs = ipfs
            return ipfs
        } else {
            return await ipfs
        }
    }

export const start = () => async (config) => {
    await use(config)
}
