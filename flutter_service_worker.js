'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ddc3fcae5a8a159b3568c503f0d84c99",
".git/config": "1b733dff6f9f30f24f68b304416a95c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b87ddab98be25a7717416099e518e7b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c75b047b61077f1a73fac23f5ba57e75",
".git/logs/refs/heads/main": "2cd272a91c10b16ae7305740674611c0",
".git/logs/refs/remotes/origin/main": "0e5febd8fab3767c6581ae399eb6b80a",
".git/objects/00/cbb9ed3d989b9089267d742e6e30de0c0b0aef": "f60a057b5ad88c27157ccc65f5b28621",
".git/objects/07/1817e52bb6d48b8b10c4c3703404bff5909b17": "e29bd4349ac9e34a7d041871234cef21",
".git/objects/07/8c32b08bf3ea2a5d26e18636c304d67cf5a7e8": "9c052b9642b5b66e13f5c72e525a844b",
".git/objects/08/70a1ab25cc72d3d2f93a95fd0b4421a9c8b53f": "e67d86da2562d33dbcaa8ebca530a348",
".git/objects/08/9aff2b3b7188c89f6835808fd24bdd0045fd62": "50aa16bf60ed030985efc0b9f3accf41",
".git/objects/0c/2eb99c8fba35988785925fb6dcb64de077450d": "79d999c7b34854f350d786f517081b2d",
".git/objects/0d/2adf790ebb685118c16a08cd800e1f3d18ed76": "29e511995d0f15eb0a4983839435a9a9",
".git/objects/0d/a186e17717dc6bc361740e02432ed54bb29dac": "ee36472552928fed2b275779e7bda3a9",
".git/objects/10/345d3483007717c09ed7f01b86c7321a80e9da": "2406b9ea746d2a4ac710dad8ecee822f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/18/bd806b45d63094669677151442f21183373ed9": "c119b1bfdec8017daaa86cde37447b28",
".git/objects/19/3de461aaba58fb0d51fc0ac2ba26671430d6ae": "8a520ab41e394b2142ee470d95c557f5",
".git/objects/1f/7b0c6a8a10275d59978969ebe7acbae8d844c7": "d3bda270207888562c1528e926055230",
".git/objects/20/1b330c3f6ac0bcc146c102483c3148f7acd51c": "e120242d2bdcbfde9e5dbd7010afd0a8",
".git/objects/23/b574e5dc02d20c2a8fa5fe7bda7b52fe49ee0b": "0afb3c6806952a293db4dfbc6b51d6c2",
".git/objects/25/94a3851cacce01a4243e8f528feebc4354b3aa": "56e49c330257502a6d097d5bc492460e",
".git/objects/2d/bec53a74050cdf5f7545a4e50c8112abc47c83": "89405d0cf7a05f78b89a35ae4c0d09a4",
".git/objects/2e/0435c413e2bd4acbac0c15cc933befc1b31f2d": "e24ee3f01a43cb46e66d4a8688eea9cf",
".git/objects/2e/86a43a3e283fdc0ec5adae5d6a7cda5b67697f": "196b7f2fff6bcb323a52ee2b31295ed1",
".git/objects/2e/e3cf5ae653ed84eb1ef913c72561af63915efb": "8f3c4d5b4508d48c5caad46fc1f3cf1a",
".git/objects/30/949831f5411b7bcfa9d0744dfbe3240e90a606": "0f053ba03fae5f28a41fbdfd39480519",
".git/objects/30/c41e31a58bcb6f2c1cd420d89e42fc26e9a3ac": "a3e7e47aab284f92d93488102d28667b",
".git/objects/32/d4af0a7b8de84586e27bb036e40364cd9806bc": "04d9ad354f96673ba9944b88771e894a",
".git/objects/35/cdd92b1fd174a6427fed50601828ddba9584b7": "e7adaa36644538d30e4801eabb886d43",
".git/objects/36/1853f0fbd257f3ce9b96496a7d6bd1581a382c": "3a6c3f87f2936208bdd8a2aa0cacee2e",
".git/objects/36/41ba0458bbdee7a14f12c5a35b627cad4e0530": "6474d46841345715c03c734116504a7f",
".git/objects/36/bcf9062115cafce0aaaa8cba02baeaeb1f6d9f": "01193b24db82301e0087704269849abb",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/d074d6b78d8394a956bd3cbc1cbc2a2074368b": "25aae6b23f76f5242205c24d5ea658ed",
".git/objects/41/11b17c67d1253cd0c58d250db11541f52b7fac": "8ee528abb23562ba1bb1683432cba6b5",
".git/objects/41/3da41c874a6993548ff1b19c17892a1b99cfed": "79a229118539360b37343dca9e24223d",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/93c0d00be757c2a65824e64099dbd3a8b67a8a": "9aa893d7df5bf8ab357abdf1d5f15ba7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/4e4ac00b2f246f102f8ee62107b639618cd5d5": "60d73463f726f696743f66584116866f",
".git/objects/4f/a8751fc94d92a7389f43fb53c6bd07781b61c3": "32be36c1b84af3d7491bd24e05e4e464",
".git/objects/4f/e86af8d92fdf448d7243058d326adfc8de4a31": "5ae657ac8ba0f1a545b1f6b7a42bad09",
".git/objects/4f/f6fdcfb421da45905b8638199f96f800017efc": "f74129cb38d2e49bd50532a9cbfb1fee",
".git/objects/50/a4b28654f96e6fe888c03b4af4f97a84485c93": "98dbeb97ef709cf282d2e8a7914d7615",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/95641557107e62c7ee1c70a9ebfbf6e4fe8af8": "f19ce0c97862354d7971d5c3e2d2f2bb",
".git/objects/5d/06ab11cc677bfcf5e140855f06494d21cd906d": "dd0c125527e1f23b827570ed99de9ba2",
".git/objects/5e/b7cc4b7bda2056bdf0af34cb846e6cc877f450": "c35e91d01648e332a724346902cdc261",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/3ef1a06c97c1a0d85c32573e0f75ccf129f523": "6b27c73c9e089c460669e3698b964904",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/8779a234b66c9cfef685f7a494ee360bb69c3e": "0c3aeac6433f8c64e56a70d0bed709e9",
".git/objects/78/375a80fbd1f6252e0fa57a72fde731f91612ed": "a228f9b8aad0d1b8219908cdb7f40a9c",
".git/objects/78/3bf784a9b1b300227c1927c8fc4fb9ea3af0e9": "e93740c1a144136ec3518705f80f1e4e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/2584d4d407ede96e668c1ff46e58eeea9707dc": "773cd07a429c288d3d22d4789f77fd05",
".git/objects/84/0f5b144a3dfd8cf4f2fc7e014cececd021d2ed": "1b1da771858e69d2555c6ee07c5e04b9",
".git/objects/84/fb9b713d2697b01ece8de8c2559b952af9ccb9": "460fc46a7469092e49cae8433c69cbfb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c3f78e8798c3c718d048fd0c752f870e2b8daa": "0f5088022aa56a49a1d52c8d89866cb5",
".git/objects/89/f55c5f4c9f9670224f0dfbbc0f22a98205efe8": "efcf781c2e5ed4f910a72f4c7f8cf786",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f3df6e5d23db3212a17d81d61ee07005428da2": "adc1a4e2a4b03f8c18d2ce1c5e75e6a7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/9c2bcd393569edaf072db1b721ebd995e680c7": "fea561d3b480d7c2cd7aa173cfd2b5ba",
".git/objects/95/909888c1c04e6036a2241ed9e4ee880a109e55": "ca8fc637fac9f72cd22f08b24bccedb0",
".git/objects/95/b56f36597b8d725e83d090cf7bede8441db62b": "711647ad89f01d34e21596e86317138e",
".git/objects/96/a5a413694756eeff489d16299e60ad5b891048": "9b63a29b579e974d6b608163b6f4b6e6",
".git/objects/97/b12c8659e1a519a178100c3e5438476e1dbc04": "3066bdea988e48fc8d977403209688ff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/0265ed88423d83d242c724c71526d4a8393dd2": "b8a865ffb0fa92abd6d86458b6c07b1a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/e8b782a816ca0b17420593ce2e58740f918b2b": "26a6ad196440878b14f50db8fefd3745",
".git/objects/b0/a55cc1c7a2baeeb6a5eb9cca8d3c5aa0fe16f5": "7687249e29f50e75706a8ba71f1fd6d0",
".git/objects/b4/46b9c49c229442caf702fc46153d16ff76ada2": "2e0bf8422822aa38bdb6f304b07a881a",
".git/objects/b4/6cc8ecd2921e2b5dd7625e0511ad2e9a586158": "60cc3504b7c15addae5d000aecd94d8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/69f1f5b41a1781dc9cb4a39a4a3df9ffa01873": "2dc551c4e7dcbbeeac91b3cfb30d443a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a407353befb0c9811941c70d9a83384804fbcb": "3dea214e10b9bb0adf84de5cea761758",
".git/objects/bb/18b8bec916b7c758280d35e55b1be2573d8777": "2a63e1e4e0b939ae3b05d52c93096d94",
".git/objects/bb/2163f578b02a1771449c98c82c062405ee2399": "7e4681a4c71ff252bf237336f9d88645",
".git/objects/bd/96515b98742a7b5872f93a922363cad8593022": "e22777a206c5902e693044d2876d170e",
".git/objects/be/7a0b7f98974c6b2de9a70ad47f91a5190f99eb": "7a6a14d0400c59feece0af6bc15e3164",
".git/objects/c0/d42fc1e4b2658ea5520506fa3fc5fd29c96916": "e30b1e5479520b8d6f954d4c04ccbfe9",
".git/objects/ca/4333ce925575aaffb0864ed305f98bf12c337b": "2311c70d020da5d6e5134e12c1789d8a",
".git/objects/cc/af2cf1ffa5d9ede0dc7f5a0126e003b4779d0f": "3ac5d0f7d434438cf08ceecf3572390e",
".git/objects/cf/c0576a2d7b7b0a7d5a0d8a26f6b119870774ff": "94935cdc2f337b9beba6e98699aed49f",
".git/objects/d0/2a071288b47bc05c2b1e96d569cb8560285354": "0f87d4980af98b50e290e05ae212c7bc",
".git/objects/d2/bdade1df8ee74334ca22ad9f2f63dabd9b27a2": "abbc056e831fee472c35300e093fc7b7",
".git/objects/d4/145b3e21fecaf99f0cf6dfd43b67e988e50504": "b9207b2f1a9b092be79f6bbbdfd0d6f4",
".git/objects/d5/6045b8dfa269bb571cdab4c72eb1d9db4da410": "af042759b896331e4edc1d01a9414a1c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/da9e4794a0cec366551808d22398fdb5fee286": "e8afa6f7c39943838052d9a27981e2d5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/e1b3790472f8b856d9370a58abf12b9af34ac6": "78a04c1ddc102d551e522b1ed81bced5",
".git/objects/e7/f3916bd6196b730f8d34f6cbce7e55305b654f": "4a37d9b59de2f05ddf6063f33019c2ef",
".git/objects/e8/71f7d99ca8f1f8703c7321768e74baa12efeaf": "caa570629afc33109863bd849618d3e0",
".git/objects/e9/e550ddae1db6ad0ecf90521646b4afc996589b": "736b4a21aa487e71afdbb286671cc5aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ce139edc6c8d46abe63f59adebbaef15e9b8ba": "23259e0c9de99a0e76b48daff52dac93",
".git/objects/ed/948c6506e9b26a4e073ad8df37804386772db2": "e071f2af070d7adb4b8d6b61c8228425",
".git/objects/ef/c1d93b3266ae376492dcfc70decab4bd08c721": "dd452f8f3865c244e527304dc586eae4",
".git/objects/f1/50594a90f2560375068e6fbec74b2fe2d0725f": "dfeed2669eaed720478dd4114dd5d46e",
".git/objects/f5/2af71d8fe5b00b2d9604373a132895499c9d04": "6330e5f4a71c89e83cd69ada0f4e344e",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/refs/heads/main": "0755f68d655d737a18430fdaed690e65",
".git/refs/remotes/origin/main": "0755f68d655d737a18430fdaed690e65",
"assets/AssetManifest.json": "120eb92efd99c010b63f8646700484ac",
"assets/assets/Icons/airportIcon.svg": "d9702a55402777f3210827c3b36c3581",
"assets/assets/Icons/boxChecked.png": "0bbc2c60c18f6ff7690676e322bf19a5",
"assets/assets/Icons/boxEmpty.png": "d584cbe7032dbaf501145051cd443cd5",
"assets/assets/Icons/briefcase.png": "5a62ac8ec4460477e0ddc916b0bbd70a",
"assets/assets/Icons/emailIcon.png": "d0ef73a608ae37803d01c79898eaefa2",
"assets/assets/Icons/emailIcon.svg": "7815f1f2c7f63ed1eaf33c6d7b41c8b9",
"assets/assets/Icons/googleIcon.png": "047feb158438114b4be6a64c9d8cf4e9",
"assets/assets/Icons/jobtitleIcon.svg": "c94fc73a881d4801d59b881a79560ba9",
"assets/assets/Icons/mobileIcon.png": "ab18a0819740b8ff30581bd75fc8efcb",
"assets/assets/Icons/nameIcon.png": "f4f7e50cbf52787324899d36a7479e7c",
"assets/assets/Icons/passwordIcon.png": "f922536e2abc04c424650d04a229b055",
"assets/assets/Icons/squareBlack.png": "270484450ffa575e8b4c1d6c731bfff8",
"assets/assets/Icons/squareWhite.png": "33b92ef62a529bd9925bc8fccdc6bf02",
"assets/assets/Images/13.png": "d5e6294828323547217ded0d61e0b03e",
"assets/assets/Images/arrowRight.png": "b81fd3a6a34951793f964246e8e508b7",
"assets/assets/Images/greenAirplane.png": "9bcbbbf9a371e2634f2e2b3657b8784a",
"assets/assets/Images/incentive.png": "54b79f6a974a9b7e3c57fbfe781d7b21",
"assets/assets/Images/InfoPopup.png": "1f017d909656258d7c70effc77e0a059",
"assets/assets/Images/profile.png": "93124812b7db6c6ce2451e34253254a5",
"assets/assets/Images/resultsImage.png": "5fad2bbea03417c5f280c2b7f4a456f7",
"assets/assets/Images/sidebar_logo.png": "27a2dd7ef837da008f0f375e0ebccb9e",
"assets/assets/Images/tooltip.png": "52c3b3eb6ae02457dbf3376830fae553",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e0cd04e042516fcc3f5235f9d00d6faf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "2aff85c62fe8f52234f914a46eb11294",
"favicon_backup.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee783883863616352071a7fcf59bee1d",
"/": "ee783883863616352071a7fcf59bee1d",
"main.dart.js": "471113c02a10739ac45f7c9edeff2932",
"manifest.json": "3e56e2e5ae7135a37ee7457baf4fad57",
"version.json": "47bea9b78a3627d36e3303c71a65e16a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
