import CA from '../../assets/capitanAmerica.png'
import DS from '../../assets/doctorStrange.png'
import Hulk from '../../assets/hulk.png'
import IM from '../../assets/ironman.png'
import SM from '../../assets/spiderman.png'
import Thor from '../../assets/thor.png'
import Avengers from '../../assets/avengers.png'
import Winners from '../../assets/winners.png'
import New from '../../assets/new.png'

export const characters = [
    {
        id: '0',
        Image: CA,
        title: 'Капитан Америка',
        description: 'Болезненный юноша, непригодный к армейской службе, Стив Роджерс был усилен экспериментальной сывороткой до максимума физической формы, доступной человеку, чтобы помочь военным операциям США.',
    },
    {
        id: '1',
        Image: DS,
        title: 'Доктор Стрэндж',
        description: 'Талантливый доктор-нейрохирург Стивен Стрэндж, который после трагической автомобильной аварии должен отбросить эго и познать секреты скрытого мира мистики и альтернативных измерений.',
    },
    {
        id: '2',
        Image: Hulk,
        title: 'Халк',
        description:'Доктор Бэннер превращается в Халка, теряя контроль над собой. Кроме того, Халк появляется, когда самому Бэннеру угрожает опасность.',
    },
    {
        id: '3',
        Image: IM,
        title: 'Железный Человек',
        description: 'Тони Старк, гениальный изобретатель и богатейший промышленник с репутацией плейбоя, страдает от ранения, полученного им в плену, где его вынудили разработать для террористов оружие массового поражения. Вместо этого он создаёт высокотехнологичный костюм-броню, с помощью которого сбегает из плена.',
    },
    {
        id: '4',
        Image: SM,
        title: 'Человек-Паук', 
        description: 'После укуса необычного паука, Питер Паркер замечаеет, что у него появляются нечеловеческие способности и решает изменить мир к лучему.',
    },
    {
        id: '5',
        Image: Thor,
        title: 'Тор', 
        description: 'Тор - сын бога Одина (главы мира Асгард) и богини Йорд (одна из богинь Мидгарда (Земли)). Сразу после рождения он был отправлен отцом в мир Асгард, где воспитывался вместе со своим приемным братом Локи под присмотром приемной матери Фригги.',
    },
];

export const charactersLinks = [
    {
        title: 'Капитан Америка',
        link: 'https://marvel.fandom.com/ru/wiki/Стивен_Роджерс_(199999)',
    },
    {
        title: 'Доктор Стрэндж',
        link: 'https://marvel.fandom.com/ru/wiki/Стефан_Стрэндж_(199999)',
    },
    {
        title: 'Халк',
        link: 'https://marvel.fandom.com/ru/wiki/Брюс_Беннер_(199999)',
    },
    {
        title: 'Железный Человек',
        link: 'https://marvel.fandom.com/ru/wiki/Энтони_Старк_(199999)',
    },
    {
        title: 'Человек-Паук',
        link: 'https://marvel.fandom.com/ru/wiki/Питер_Паркер_(199999)',
    },
    {
        title: 'Тор',
        link: 'https://marvel.fandom.com/ru/wiki/Тор_Одинсон_(199999)',
    },
];

export const comics = [
    {
        id: '0',
        Image: Avengers,
        title: 'Мстители',
        description: 'Когда наступают новые смутные времена, и с суперзлодеями, угрожающими всему человечеству, уже не справиться в одиночку, величайшие герои Вселенной Marvel объединяются в непобедимую команду Мстителей'
    },
    {
        id: '1', 
        Image: Winners,
        title: 'Мстители победили всех',
        description: '«Что, если» вы станете свидетелями событий грандиозной важности и трагичности для одном из таких миров, ведь в нём Мстители, величайшие герои Земли, ополчились против всех до единого суперсуществ на планете и уничтожили вселенную ещё в 80-х, задолго до того, как это стало мейнстримом.',
    },
    {
        id: '2', 
        Image: New,
        title: 'Новые Мстители. Том 4',
        description: 'Секретное вторжение сотрясает мир Новых Мстителей!',
    },
];

export const comicsLinks = [
    {
        title: 'Мстители',
        link: 'https://www.ozon.ru/product/supergeroi-marvel-ofitsialnaya-kollektsiya-mstiteli-261690608/?advert=aQ05H1kdZNX7OxQbkqSOQeLVV2IjRHkc1dcC71jq4QpDu65ui2_D6klhqBzgC0PhjD0s3pAstippTlhR_ilbXQhjogeXRuEf1IF0Zu70I2edCP2T4z0wQuX7HVb2ugUMFsMxd0yH8N9KP6LbF0H72x-h-nDvYvQ1wuLN-DkajcW5qsBhjxcW4WXhYs9xwIcH5pJfX86w6ICtDoL0P6POYDGXPy8C7R89Op39tuFuOfpHb6rqEvqyzJEX-AaOwStoHEnkCYfHBjO_Si37or1T2H4smXlj-Prs5zDlr_mMU2NW4X7QSIcWlIVmVhIbNKttPCWtsWvEs9sGC4QWgBTq1yFMFR72PsrYVXJk2Sy0dAQnHwN5_Z_4JhuQ8E32GPWE&avtc=1&avte=2&avts=1719909513&keywords=Комиксы+про+Мстителей#section-description--offset-140--offset-80',
    },
    {
        title: 'Мстители победили всех',
        link: 'https://www.ozon.ru/product/marvel-chto-esli-mstiteli-pobedili-vseh-566948292/?asb=7RgnJt7Xz2l7FxaaiLZ%252FusLUTgOLQebux6mDyC47PHA%253D&asb2=wx8Otj0aH7Z6rj6RFCGT1NTrZXv2qAXC4r3ekDvfSCEY5NRQA0bakvIRip96bc0ig-KuvdHFtb9yVz9NXX0Eiw&avtc=1&avte=2&avts=1719909855&keywords=Комиксы+про+Мстителей#section-description--offset-140--offset-80',
    },
    {
        title: 'Новые Мстители. Том 4',
        link: 'https://www.ozon.ru/product/novye-mstiteli-polnoe-sobranie-tom-4-bendis-brayan-maykl-1288791547/?asb=dXWq5lHZr7GfrX5HW40%252FAIeKy1vbIct9RUmDWccPuZE%253D&asb2=LhfjO44pZA3SWHyOB7h5zvBWaXPBruog0u21Ues3CWtAsbW6Sy363ISiNt8KWjTxGzZ5RJDVPaZPJf8OMouocg&avtc=1&avte=2&avts=1719909855&from_sku=1288791547&from_url=https%253A%252F%252Fwww.ozon.ru%252Fcategory%252Fkomiksy-pro-mstiteley%252F&keywords=Комиксы+про+Мстителей&oos_search=false',
    },
];