"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Обновление 7.34e и чего ждать далее",
          text: "Почти год координирования и усердной работы грандиозно завершился вместе с многонедельным гигантом (размером где-то со стадион) по имени The International 2023. Заперев Climate Pledge Arena и решив, что все насмотрелись на вездесущего Баратрума, мы выпускаем обновление 7.34e. Это значит, что настала пора разработчикам Доты готовиться к зимней спячке и…",
          img: "https://clan.cloudflare.steamstatic.com/images//3703047/899e8493d00724b9b3b22ba2a5588fe1ed7ee03d.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Чемпионы The International 2023",
          text: "Поздравляем команду Team Spirit с чемпионством на The Internatioal 2023. Эта победа делает состав второй командой, сумевшей завоевать Эгиду дважды. Эти ребята проиграли всего в двух играх за весь турнир, завершив своё победоносное шествие в гранд-финале с идеальным счётом 3:0, подтверждая звание лучшей команды по Доте в мире.",
          img: "https://clan.cloudflare.steamstatic.com/images//3703047/04db0e2af5e77d1d501e46d48b7b86e0a173c421.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The International начинается",
          text: "Поистине грандиозный плей-офф подошёл к концу, и восемь команд завоевали желанные места в основном этапе: Team Spirit, Team Liquid, LGD Gaming и Azure Ray в верхней сетке, а Gaimin Gladiators, nouns, BetBoom Team и Virtus.pro — в нижней. Поздравляем все восемь команд, которые уже готовятся побороться за Эгиду на The International. До первой битвы на стадионе Climate Pledge Arena в Сиэтле остался всего день.",
          img: "https://clan.cloudflare.steamstatic.com/images//3703047/678dbe85cacbc5aebbbfde27e48e7633dce28e9f.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Приготовьтесь к этапу плей-офф",
          text: "Двадцать команд приняли участие в групповом этапе. Теперь же, когда позади 4 насыщенных дня, 100 игр, 4 выбывших команды, 57 богоподобий, 6 буйств и 104 выбранных героя, шестнадцать команд распределились по верхней и нижней сеткам в ожидании настоящей битвы, до которой остались считанные часы.",
          img: "https://clan.cloudflare.steamstatic.com/images//3703047/6e53e4d54f954b0ea2f724db8f3b2e8ec0fbc841.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Новости Инта: трансляции, пабстомпы и потайная лавка",
          text: "«Дорога на The International» буквально в одном метафорическом шаге, а это значит, что на подходе также множество крутых и интересных штук. В этом году у зрителей ещё больше способов насладиться матчами, завести новые знакомства и показать свою любовь к игре, так что мы решили собрать всю информацию об этом в один пост, чтобы веселье точно не прошло мимо вас.",
          img: "https://clan.cloudflare.steamstatic.com/images/3703047/37e5f9a6e890c17bfce076d5f1e20ab338289c4e/russian.png?t=0",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
