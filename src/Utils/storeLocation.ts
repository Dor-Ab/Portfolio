import GeolcationModel from "../Models/geolocationModel";

function getStoreLocation(): Promise<GeolcationModel> {
    return new Promise<GeolcationModel>((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                const geo = new GeolcationModel()
                geo.latitude = position.coords.latitude
                geo.longitude = position.coords.longitude
                resolve(geo)
            },
            err => reject(err)
        )
    })
}

export default getStoreLocation