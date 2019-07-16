import prod from './config_prod'
import dev from './config_dev'
import stage from './config_stage'

const getConfig = () => {

    switch (process.env.NODE_ENV_TYPE) {

        case 'serverdev' : {
            return dev
        }
        case 'production': {
            return prod
        }

        case 'stage': {
            return stage
        }

        default: {
            return dev
        }
    }
}


export default getConfig