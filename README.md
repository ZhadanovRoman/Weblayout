
### Создание компонента

Для генерации pug, scss, js файлов компонента необходимо ввести команду:
```shell
npm run component:create [название-компонента]
```
**[название-компонента]** - произвольное название компонента, записанное латиницей  

Например:
```shell
npm run component:create example-button
```
Таким образом в папке `src/components` будет создана папка `example-button` с готовыми для работы pug, scss, js файлами внутри.  
Все созданные файлы будут добавлены в сборщик автоматически

> Для инициализации js-скриптов компонентов необходимо вручную добавить импорт в файл `/src/app/js/common.js` и добавить созданный компонент в объект `allComponents`

### Удаление компонента
Для удаления существующего компонента необходимо ввести команду:
```shell
npm run component:remove [название-компонента]
```
**[название-компонента]** - произвольное название компонента, записанное латиницей

Например:
```shell
npm run component:remove example-button
```
Таким образом в папке `src/components` будет удалена папка `example-button`  
Все pug, scss файлы, относящиеся к компоненту будут удалены из сборщика 
### Краткое описание файловой структуры
```
/
├── build_modules
└── src
    ├── app
    │   ├── js
    │   │   └── base
    │   └── common.js
    ├── assets
    │   ├── fonts
    │   ├── icons
    │   ├── images
    │   └── videos
    ├── components
    └── pages
```
-