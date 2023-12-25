const router = require("express").Router();

const renderTemplate = require("../utils/renderTemplate");

const Abaddon = require("../views/heroesPage/Abaddon");
const Abyssal_underlord = require("../views/heroesPage/Abyssal_underlord");
const Alchemist = require("../views/heroesPage/Alchemist");
const Ancient_apparation = require("../views/heroesPage/Ancient_apparition");
const Antimage = require("../views/heroesPage/Antimage");
const ArcWarden = require("../views/heroesPage/ArcWarden");
const Axe = require("../views/heroesPage/Axe");
const Bane = require("../views/heroesPage/Bane");
const Batrider = require("../views/heroesPage/Batrider");
const Beastmaster = require("../views/heroesPage/Beastmaster");
const Bloodseeker = require("../views/heroesPage/Bloodseeker");
const BountyHunter = require("../views/heroesPage/BountyHunter");
const Brewmaster = require("../views/heroesPage/Brewmaster");
const Bristleback = require("../views/heroesPage/Bristleback");
const Broodmother = require("../views/heroesPage/Broodmother");
const Centaur = require("../views/heroesPage/Centaur");
const Chaos_knight = require("../views/heroesPage/Chaos_knight");
const Chen = require("../views/heroesPage/Chen");
const Clinkz = require("../views/heroesPage/Clinkz");
const Crystal_maiden = require("../views/heroesPage/Crystal_maiden");
const Dark_seer = require("../views/heroesPage/Dark_seer");
const Dark_willow = require("../views/heroesPage/Dark_willow");
const Dawnbreaker = require("../views/heroesPage/Dawnbreaker");
const Dazzle = require("../views/heroesPage/Dazzle");
const Death_prophet = require("../views/heroesPage/Death_prophet");
const Disruptor = require("../views/heroesPage/Disruptor");
const Doom_bringer = require("../views/heroesPage/Doom_bringer");
const Dragon_knight = require("../views/heroesPage/Dragon_knight");
const Drow_ranger = require("../views/heroesPage/Drow_ranger");
const Earth_spirit = require("../views/heroesPage/Earth_spirit");
const Earthshaker = require("../views/heroesPage/Earthshaker");
const Elder_titan = require("../views/heroesPage/Elder_titan");
const Ember_spirit = require("../views/heroesPage/Ember_spirit");
const Enchantress = require("../views/heroesPage/Enchantress");
const Enigma = require("../views/heroesPage/Enigma");
const Faceless_void = require("../views/heroesPage/Faceless_void");
const Furion = require("../views/heroesPage/Furion");
const Grimstroke = require("../views/heroesPage/Grimstroke");
const Gyrocopter = require("../views/heroesPage/Gyrocopter");
const Hoodwink = require("../views/heroesPage/Hoodwink");
const Huskar = require("../views/heroesPage/Huskar");
const Invoker = require("../views/heroesPage/Invoker");
const Jakiro = require("../views/heroesPage/Jakiro");
const Juggernaut = require("../views/heroesPage/Juggernaut");
const Keeper_of_the_light = require("../views/heroesPage/Keeper_of_the_light");
const Kunkka = require("../views/heroesPage/Kunkka");
const Legion_commander = require("../views/heroesPage/Legion_commander");
const Leshrac = require("../views/heroesPage/Leshrac");
const Lich = require("../views/heroesPage/Lich");
const Life_stealer = require("../views/heroesPage/Life_stealer");
const Lina = require("../views/heroesPage/Lina");
const Lion = require("../views/heroesPage/Lion");
const Lone_druid = require("../views/heroesPage/Lone_druid");
const Luna = require("../views/heroesPage/Luna");
const Lycan = require("../views/heroesPage/Lycan");
const Magnataur = require("../views/heroesPage/Magnataur");
const Marci = require("../views/heroesPage/Marci");
const Mars = require("../views/heroesPage/Mars");
const Medusa = require("../views/heroesPage/Medusa");
const Meepo = require("../views/heroesPage/Meepo");
const Mirana = require("../views/heroesPage/Mirana");
const Monkey_king = require("../views/heroesPage/Monkey_king");
const Morphling = require("../views/heroesPage/Morphling");
const Muerta = require("../views/heroesPage/Muerta");
const Naga_siren = require("../views/heroesPage/Naga_siren");
const Necrolyte = require("../views/heroesPage/Necrolyte");
const Nevermore = require("../views/heroesPage/Nevermore");
const Night_stalker = require("../views/heroesPage/Night_stalker");
const Nyx_assassin = require("../views/heroesPage/Nyx_assassin");
const Obsidian_destroyer = require("../views/heroesPage/Obsidian_destroyer");
const Ogre_magi = require("../views/heroesPage/Ogre_magi");
const Omniknight = require("../views/heroesPage/Omniknight");
const Oracle = require("../views/heroesPage/Oracle");
const Pangolier = require("../views/heroesPage/Pangolier");
const Phantom_assassin = require("../views/heroesPage/Phantom_assassin");
const Phantom_lancer = require("../views/heroesPage/Phantom_lancer");
const Phoenix = require("../views/heroesPage/Phoenix");
const Primal_beast = require("../views/heroesPage/Primal_beast");
const Puck = require("../views/heroesPage/Puck");
const Pudge = require("../views/heroesPage/Pudge");
const Pugna = require("../views/heroesPage/Pugna");
const Queenofpain = require("../views/heroesPage/Queenofpain");
const Rattletrap = require("../views/heroesPage/Rattletrap");
const Razor = require("../views/heroesPage/Razor");
const Riki = require("../views/heroesPage/Riki");
const Rubick = require("../views/heroesPage/Rubick");
const Sand_king = require("../views/heroesPage/Sand_king");
const Shadow_demon = require("../views/heroesPage/Shadow_demon");
const Shadow_shaman = require("../views/heroesPage/Shadow_shaman");
const Shredder = require("../views/heroesPage/Shredder");
const Silencer = require("../views/heroesPage/Silencer");
const Skeleton_king = require("../views/heroesPage/Skeleton_king");
const Skywrath_mage = require("../views/heroesPage/Skywrath_mage");
const Slardar = require("../views/heroesPage/Slardar");
const Slark = require("../views/heroesPage/Slark");
const Snapfire = require("../views/heroesPage/Snapfire");
const Sniper = require("../views/heroesPage/Sniper");
const Spectre = require("../views/heroesPage/Spectre");
const Spirit_breaker = require("../views/heroesPage/Spirit_breaker");
const Storm_spirit = require("../views/heroesPage/Storm_spirit");
const Sven = require("../views/heroesPage/Sven");
const Techies = require("../views/heroesPage/Techies");
const Templar_assassin = require("../views/heroesPage/Templar_assassin");
const Terrorblade = require("../views/heroesPage/Terrorblade");
const Tidehunter = require("../views/heroesPage/Tidehunter");
const Tinker = require("../views/heroesPage/Tinker");
const Tiny = require("../views/heroesPage/Tiny");
const Treant = require("../views/heroesPage/Treant");
const Troll_warlord = require("../views/heroesPage/Troll_warlord");
const Tusk = require("../views/heroesPage/Tusk");
const Undying = require("../views/heroesPage/Undying");
const Ursa = require("../views/heroesPage/Ursa");
const Vengefulspirit = require("../views/heroesPage/Vengefulspirit");
const Venomancer = require("../views/heroesPage/Venomancer");
const Viper = require("../views/heroesPage/Viper");
const Visage = require("../views/heroesPage/Visage");
const Void_spirit = require("../views/heroesPage/Void_spirit");
const Warlock = require("../views/heroesPage/Warlock");
const Weaver = require("../views/heroesPage/Weaver");
const Windrunner = require("../views/heroesPage/Windrunner");
const Winter_wyvern = require("../views/heroesPage/Winter_wyvern");
const Wisp = require("../views/heroesPage/Wisp");
const Witch_doctor = require("../views/heroesPage/Witch_doctor");
const Zuus = require("../views/heroesPage/Zuus");

router.get("/1", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Abaddon, { user }, res);
});

router.get("/2", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Alchemist, { user }, res);
});

router.get("/3", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Ancient_apparation, { user }, res);
});

router.get("/4", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Antimage, { user }, res);
});

router.get("/5", async (req, res) => {
  const user = req.session.user;
  renderTemplate(ArcWarden, { user }, res);
});

router.get("/6", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Axe, { user }, res);
});

router.get("/7", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Bane, { user }, res);
});

router.get("/8", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Batrider, { user }, res);
});

router.get("/9", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Beastmaster, { user }, res);
});

router.get("/10", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Bloodseeker, { user }, res);
});

router.get("/11", async (req, res) => {
  const user = req.session.user;
  renderTemplate(BountyHunter, { user }, res);
});

router.get("/12", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Brewmaster, { user }, res);
});

router.get("/13", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Bristleback, { user }, res);
});

router.get("/14", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Broodmother, { user }, res);
});

router.get("/15", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Centaur, { user }, res);
});

router.get("/16", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Chaos_knight, { user }, res);
});

router.get("/17", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Chen, { user }, res);
});

router.get("/18", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Clinkz, { user }, res);
});

router.get("/19", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Rattletrap, { user }, res);
});

router.get("/20", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Crystal_maiden, { user }, res);
});

router.get("/21", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Dark_seer, { user }, res);
});

router.get("/22", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Dark_willow, { user }, res);
});

router.get("/23", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Dawnbreaker, { user }, res);
});

router.get("/24", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Dazzle, { user }, res);
});

router.get("/25", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Death_prophet, { user }, res);
});

router.get("/26", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Disruptor, { user }, res);
});

router.get("/27", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Doom_bringer, { user }, res);
});

router.get("/28", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Dragon_knight, { user }, res);
});

router.get("/29", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Drow_ranger, { user }, res);
});

router.get("/30", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Earth_spirit, { user }, res);
});

router.get("/31", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Earthshaker, { user }, res);
});

router.get("/32", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Elder_titan, { user }, res);
});

router.get("/33", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Ember_spirit, { user }, res);
});

router.get("/34", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Enchantress, { user }, res);
});

router.get("/35", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Enigma, { user }, res);
});

router.get("/36", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Faceless_void, { user }, res);
});

router.get("/37", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Grimstroke, { user }, res);
});

router.get("/38", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Gyrocopter, { user }, res);
});

router.get("/39", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Hoodwink, { user }, res);
});

router.get("/40", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Huskar, { user }, res);
});

router.get("/41", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Invoker, { user }, res);
});

router.get("/42", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Wisp, { user }, res);
});

router.get("/43", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Jakiro, { user }, res);
});

router.get("/44", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Juggernaut, { user }, res);
});

router.get("/45", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Keeper_of_the_light, { user }, res);
});

router.get("/46", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Kunkka, { user }, res);
});

router.get("/47", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Legion_commander, { user }, res);
});

router.get("/48", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Leshrac, { user }, res);
});

router.get("/49", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Lich, { user }, res);
});

router.get("/50", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Life_stealer, { user }, res);
});

router.get("/51", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Lina, { user }, res);
});

router.get("/52", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Lion, { user }, res);
});

router.get("/53", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Lone_druid, { user }, res);
});

router.get("/54", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Luna, { user }, res);
});

router.get("/55", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Lycan, { user }, res);
});

router.get("/56", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Magnataur, { user }, res);
});

router.get("/57", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Marci, { user }, res);
});

router.get("/58", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Mars, { user }, res);
});

router.get("/59", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Medusa, { user }, res);
});

router.get("/60", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Meepo, { user }, res);
});

router.get("/61", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Mirana, { user }, res);
});

router.get("/62", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Monkey_king, { user }, res);
});

router.get("/63", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Morphling, { user }, res);
});

router.get("/64", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Muerta, { user }, res);
});

router.get("/65", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Naga_siren, { user }, res);
});

router.get("/66", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Furion, { user }, res);
});

router.get("/67", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Necrolyte, { user }, res);
});

router.get("/68", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Night_stalker, { user }, res);
});

router.get("/69", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Nyx_assassin, { user }, res);
});

router.get("/70", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Ogre_magi, { user }, res);
});

router.get("/71", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Omniknight, { user }, res);
});

router.get("/72", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Oracle, { user }, res);
});

router.get("/73", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Obsidian_destroyer, { user }, res);
});

router.get("/74", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Pangolier, { user }, res);
});

router.get("/75", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Phantom_assassin, { user }, res);
});

router.get("/76", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Phantom_lancer, { user }, res);
});

router.get("/77", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Phoenix, { user }, res);
});

router.get("/78", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Primal_beast, { user }, res);
});

router.get("/79", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Puck, { user }, res);
});

router.get("/80", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Pudge, { user }, res);
});

router.get("/81", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Pugna, { user }, res);
});

router.get("/82", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Queenofpain, { user }, res);
});

router.get("/83", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Razor, { user }, res);
});

router.get("/84", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Riki, { user }, res);
});

router.get("/85", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Rubick, { user }, res);
});

router.get("/86", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Sand_king, { user }, res);
});

router.get("/87", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Shadow_demon, { user }, res);
});

router.get("/88", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Nevermore, { user }, res);
});

router.get("/89", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Shadow_shaman, { user }, res);
});

router.get("/90", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Silencer, { user }, res);
});

router.get("/91", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Skywrath_mage, { user }, res);
});

router.get("/92", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Slardar, { user }, res);
});

router.get("/93", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Slark, { user }, res);
});

router.get("/94", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Snapfire, { user }, res);
});

router.get("/95", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Sniper, { user }, res);
});

router.get("/96", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Spectre, { user }, res);
});

router.get("/97", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Spirit_breaker, { user }, res);
});

router.get("/98", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Storm_spirit, { user }, res);
});

router.get("/99", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Sven, { user }, res);
});

router.get("/100", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Techies, { user }, res);
});

router.get("/101", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Templar_assassin, { user }, res);
});

router.get("/102", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Terrorblade, { user }, res);
});

router.get("/103", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Tidehunter, { user }, res);
});

router.get("/104", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Shredder, { user }, res);
});

router.get("/105", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Tinker, { user }, res);
});

router.get("/106", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Tiny, { user }, res);
});

router.get("/107", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Treant, { user }, res);
});

router.get("/108", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Troll_warlord, { user }, res);
});

router.get("/109", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Tusk, { user }, res);
});

router.get("/110", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Abyssal_underlord, { user }, res);
});

router.get("/111", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Undying, { user }, res);
});

router.get("/112", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Ursa, { user }, res);
});

router.get("/113", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Vengefulspirit, { user }, res);
});

router.get("/114", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Venomancer, { user }, res);
});

router.get("/115", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Viper, { user }, res);
});

router.get("/116", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Visage, { user }, res);
});

router.get("/117", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Void_spirit, { user }, res);
});

router.get("/118", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Warlock, { user }, res);
});

router.get("/119", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Weaver, { user }, res);
});

router.get("/120", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Windrunner, { user }, res);
});

router.get("/121", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Winter_wyvern, { user }, res);
});

router.get("/122", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Witch_doctor, { user }, res);
});

router.get("/123", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Skeleton_king, { user }, res);
});

router.get("/124", async (req, res) => {
  const user = req.session.user;
  renderTemplate(Zuus, { user }, res);
});

module.exports = router;
