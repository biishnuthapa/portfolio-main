import { getMaxListeners } from "node:events";
import { getMainColorOfGraphicItem } from "recharts/types/util/ChartUtils";

export const SOCIAL_LINKS = {
    github: "https://github.com/biishnuthapa",
    linkedin: "https://www.linkedin.com/in/biishnu",
    twitter: "https://twitter.com/bisu_cndhuli",
    mail: "mailto:biishnuthapa@gmail.com",
  } as const;
  
  export const EMAIL_CONFIG = {
    serviceId: 'service_um9ipom',
    templateId: 'template_z5gh9ld',
    publicKey: 'yET7L729N0fYXJUGM',
    recipientEmail: 'biishnuthapa@gmail.com'
  } as const;