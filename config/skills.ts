import { IconType } from 'react-icons'
import {
  SiJava,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiApachekafka,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiDocker,
  SiMicrosoftazure,
  SiAzuredevops,
  SiRancher,
  SiGithub,
  SiOracle,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiMaterialui,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiSpringboot,
  SiSpring,
  SiApachemaven,
  SiIntellijidea,
  SiEclipseide,
  SiHibernate,
} from 'react-icons/si'
import { FaSourcetree } from 'react-icons/fa'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'productivity boost'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Java (v8, 11)',
      icon: SiJava,
    },
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Spring Boot',
      icon: SiSpringboot,
    },
    {
      name: 'Kafka',
      icon: SiApachekafka,
    },
    {
      name: 'Hibernate (Spring JPA)',
      icon: SiHibernate,
    },
    {
      name: 'Spring MVC',
      icon: SiSpring,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Express Js',
      icon: SiExpress,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialui,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
  ],
  database: [
    {
      name: 'MsSQL',
      icon: SiMicrosoftsqlserver,
    },
    {
      name: 'Oracle',
      icon: SiOracle,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'SocketIO',
      icon: SiSocketdotio,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'Azure Cloud',
      icon: SiMicrosoftazure,
    },
    {
      name: 'Maven',
      icon: SiApachemaven,
    },
    {
      name: 'Rancher',
      icon: SiRancher,
    },
    {
      name: 'Github CI/CD',
      icon: SiGithub,
    },
    {
      name: 'Azure DevOps',
      icon: SiAzuredevops,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
    {
      name: 'IntelliJ IDEA',
      icon: SiIntellijidea,
    },
    {
      name: 'Eclipse',
      icon: SiEclipseide,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
