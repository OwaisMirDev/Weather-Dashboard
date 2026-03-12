import LocationIcon from "../../assets/icons/location.svg"
import CloudIcon from "../../assets/icons/cloud.svg"
import { getCurrentDate } from "../../utils/getCurrentDate"

export function WeatherHeader() {
    return <>
        <div id="header" className="flex justify-between  items-center " >
            <span className="flex items-center gap-6 flex-3 min-w-0">
                <img src={LocationIcon} alt="" />
                <span className="text-4xl font-bold flex-2 min-w-0 wrap-break-word ">
                    Srinagar
                </span>

                <span className="text-2xl font-light text-white/70 flex-1 min-w-0 wrap-break-word">
                    India
                </span>
            </span>

            <img src={CloudIcon} alt="" className="w-30 h-30 flex-1 min-w-0" />

        </div>
        <p className="font-medium text-lg text-white/80">{getCurrentDate()}</p>
    </>
}