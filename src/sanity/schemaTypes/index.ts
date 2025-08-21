import aboutType from './aboutType'
import { callToActionType } from './callToActionType'
import homeType from './homeType'
import imageWithAlt from './imageWithAlt'
import { personType } from './personType'
import {postType} from './postType'
import project from './projectType'
import QnA from './qnaType'
import seo from './seo'
import Service from './serviceType'
import { settingsType } from './settings'
import { socialLinkType } from './socialLinkType'
import { tagsType } from './tagsType'
import { tagType } from './tagType'

export const schema = [
    postType, 
    settingsType, 
    homeType,
    aboutType,
    socialLinkType,
    callToActionType,
    tagsType,
    tagType,
    personType,
    Service,
    QnA,
    project,
    // Objects
    imageWithAlt,
    seo
]