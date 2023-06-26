import axios from "axios"
import StoreModel from "../Models/storeModel"
import appConfig from "../Utils/config"

class StoreService {

    public async getAllStores(): Promise<StoreModel[]> {
        const response = await axios.get<StoreModel[]>(appConfig.storeUrl)
        const stores = response.data
        return stores
    }

    public async addStore(store: StoreModel): Promise<StoreModel> {
        const response = await axios.post<StoreModel>(appConfig.storeUrl, store)
        const addedStore = response.data
        return addedStore
    }

    public async deleteStore(storeId: number): Promise<void> {
        await axios.delete(appConfig.storeUrl + storeId)
    }
}

const storeService = new StoreService()
export default storeService