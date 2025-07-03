import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"


export const TechnicalServiceApp = () => {
    return(
        <AppTheme>
          <AppRouter/>
        </AppTheme>
    )
}