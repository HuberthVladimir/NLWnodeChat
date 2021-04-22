import { Request, Response } from "express"
import { SettingsService } from "../services/SettingService"

class SettingsController {

    async create(request: Request, response: Response) {
        const { chat, username } = request.body

        const settingsSettings = new SettingsService()

        try {
            const settings =  await settingsSettings.create({ chat, username })
    
            return response.json(settings)
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }
}

export { SettingsController }