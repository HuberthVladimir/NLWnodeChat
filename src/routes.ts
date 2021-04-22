import { Router } from "express"
import { SettingsController } from "./controllers/SettingsControllers"
import { UsersController } from "./controllers/UsersControllers"

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()

routes.post("/settings", settingsController.create)
routes.post("/users" , usersController.create)

export { routes }