import { AppLinks } from "@/types/app-links";
import { FileImage, FileText, Globe, HelpCircle, LogIn, LogOut, Paintbrush2, PencilRuler, Projector, Sheet, UserPlus2 } from "lucide-react";

export const MainRoute : AppLinks[] = [
  {
    title: 'Acceuil',
    baseUrl: '/'
  },
  {
    title : 'Librairie',
    children : [
      {
        title: 'Feuille de calcul',
        baseUrl: '/Library',
        Icon: Sheet,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#5abc11]',
      },
      {
        title: 'Document',
        baseUrl: '/Library',
        Icon: FileText,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#ab9864]',
      },
      {
        title: 'Presentation',
        baseUrl: '/Library',
        Icon: Projector,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#ff5660]',
      },
      {
        title: 'Identité graphique',
        baseUrl: '/Library',
        Icon: PencilRuler,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#20997D]',
      },
      {
        title: 'Design UI/UX',
        baseUrl: '/Library',
        Icon: Paintbrush2,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#BF3AB8]',
      },
      {
        title: 'Images & autres',
        baseUrl: '/Library',
        Icon: FileImage,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#ff8008]',
      },
    ]
  },
  {
    title : 'Communauté',
    children : [
      {
        title: 'Blog',
        baseUrl: '/Blog',
        Icon: Globe,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#83889c]',
      },
      {
        title: 'Forum',
        baseUrl: '/Forum',
        Icon: HelpCircle,
        description: 'Ceci est une description et elle sera afficher juste en bas du titre',
        color: 'group-hover:text-[#d227b3]',
      }
    ]
  },
  {
    title: 'Prix',
    baseUrl: '/Pricing'
  },
]

export const LogInRoute : AppLinks[] = [
  {
    title: 'Connexion',
    baseUrl: '/Log-in',
    Icon: LogIn
  }
]

export const SignUpRoute : AppLinks[] = [
  {
    title: 'Inscription',
    baseUrl: '/sign-up',
    Icon: UserPlus2
  }
]

export const LogOutRoute : AppLinks[] = [
  {
    title: 'Deconnexion',
    baseUrl: '/log-out',
    Icon: LogOut
  }
]