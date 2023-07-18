const projects = [
    {
        id: 1,
        name: 'ROBEX Project',
        githubLink:'https://github.com/zebiriabderrahim/Initial-Embedded-System-Project-INF1900',
        imageUrl: require('../img/microchip-1.svg').default,
        technologies: [
            {
                id: 1,
                icon:require('../img/c++.svg').default
            },
            {
                id: 2,
                icon:require('../img/c.svg').default
            }
        ]

    },
    {
        id: 2,
        name: 'Zork game clone',
        githubLink:'https://github.com/zebiriabderrahim/text-based-adventure-game',
        imageUrl:require('../img/zork.svg').default,
        technologies: [
            {
                id: 1,
                icon:require('../img/c++.svg').default
            }]
    },
    {
        id: 3,
        name: '7 Differences Game',
        githubLink:'https://github.com/zebiriabderrahim/Web-Application-Software-Project-LOG2990',
        imageUrl:require('../img/7.svg').default,
        technologies: [
            {
                id: 1,
                icon:require('../img/angular.svg').default
            },
            {
                id: 2,
                icon:require('../img/nodeJs.svg').default
            },
            {
                id: 3,
                icon:require('../img/mongoDB.svg').default
            },
            {
                id: 4,
                icon:require('../img/nestjs.svg').default
            },
            {
                id: 5,
                icon:require('../img/rxjs.svg').default
            }
        ]
    },
    {
        id: 4,
        name: 'CloudDrop-CLI',
        githubLink:'https://github.com/zebiriabderrahim/CloudDrop-CLI',
        imageUrl: require('../img/clouddrop.svg').default,
        technologies: [
            {
                id: 1,
                icon:require('../img/java.svg').default 
            }]
    }
];

export default projects;