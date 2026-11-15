document.addEventListener('DOMContentLoaded',()=>{
    const seasons=document.getElementById('seasons');
    const series=document.getElementById('series');
    const video=document.getElementById('video');
    const videoMessage=document.getElementById('videoMessage');

    const seriesData={
        1:22,
        2:23,
        3:20,
        4:26,
        5:23,
        6:24,
        7:23,
        8:23,
        9:24,
        10:23,
        11:22,
        12:22,
        13:22,
        14:15,
        15:10
    };
    const links={
        1:{
            1: "../1%20season/1080.mp4",
            2: "../1%20season/1080 (1).mp4",
            3: "../1%20season/1080 (2).mp4",
            4: "../1%20season/1080 (3).mp4",
            5: "../1%20season/1080 (4).mp4",
            6: "../1%20season/1080 (5).mp4",
            7: "../1%20season/1080 (6).mp4",
            8: "../1%20season/1080 (7).mp4",
            9: "../1%20season/1080 (8).mp4",
            10: "../1%20season/1080 (9).mp4",
            11: "../1%20season/1080 (10).mp4",
            12: "../1%20season/1080 (11).mp4",
            13: "../1%20season/1080 (12).mp4",
            14: "../1%20season/1080 (13).mp4",
            15: "../1%20season/1080 (14).mp4",
            16: "../1%20season/1080 (15).mp4",
            17: "../1%20season/1080 (16).mp4",
            18: "../1%20season/1080 (17).mp4",
            19: "../1%20season/1080 (18).mp4",
            20: "../1%20season/1080 (19).mp4",
            21: "../1%20season/1080 (20).mp4",
            22: "../1%20season/1080 (21).mp4"
        },
        2:{
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: "",
            18: "",
            19: "",
            20: "",
            21: "",
            22: "",
            23: ""
        },
        3:{
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: "",
            18: "",
            19: "",
            20: "",
        },
        4:{
            1: "https://maxima.cdn.cinemap.cc/f3ffcd1b3f71058f95326ffdcd7bed11:2025122614/tvseries/5525f357fc5fa2971fcc1a367e60806ced124a69/1080.mp4",
            2: "https://lynx.cdn.cinemap.cc/ab62fa9cfffedcf5982e3e54ef314e3d:2025122614/tvseries/97d94392d70d4f692cf6e97ef120fd59ee9c0309/1080.mp4",
            3: "https://kurt.cdn.cinemap.cc/181329b27f14040542427bd55be5178a:2025122614/tvseries/23a996f605de1fe6888424f4ffc4e4fc763ca68b/1080.mp4",
            4: "https://noise.cdn.cinemap.cc/c0c5e1dc9f1239b4207c70757d2b20e7:2025122614/tvseries/227ff607fea0d55c2b97d9a2bf80418e4f1bd7ee/1080.mp4",
            5: "https://dysprosium.cdn.cinemap.cc/c2033fec6bb6583dda390131e04162d3:2025122614/tvseries/4e36fbeffed4a43074ea8523fa3d322732f312bf/1080.mp4",
            6: "https://draco.cdn.cinemap.cc/f308dd1dd59b218d495a4287a2699c06:2025122614/tvseries/4d5bf0afd6b05136af993d638c6c1ba994f57a8b/1080.mp4",
            7: "https://yttrium.cdn.cinemap.cc/200c7ade226f06e0cd26fbe8b31634da:2025122614/tvseries/b353a3bc324767421971a8a7644cc88cc233cf59/1080.mp4",
            8: "https://palmium.cdn.cinemap.cc/be22a130034f0133b24c09f7cc1cc3b4:2025122614/tvseries/0d377575e73c58cd5080a311893e783d22c41c8e/1080.mp4",
            9: "https://phaeton.cdn.cinemap.cc/96df931f26cd37e865d1a774f0e11523:2025122614/tvseries/f30d5357ff5ee2c89dab3355c42455d47ac87fd7/1080.mp4",
            10: "https://consul.cdn.cinemap.cc/d82db2bbc9443954ef2a2ee5b77dd794:2025122614/tvseries/db1ef6dde2f637360fdac22344006a5e0c2cae24/1080.mp4",
            11: "https://ranger.cdn.cinemap.cc/60079df015f574b58e22b5f57937c7c7:2025122614/tvseries/d0833e85fd2f40b2d9206f9a951732018b736ea9/1080.mp4",
            12: "https://locust.cdn.cinemap.cc/270e7cb5d26091e70ca66d8eaf46c9c3:2025122614/tvseries/81b0eb7ffc587d00ef0df4ab8cd5a89b1a18f1c1/1080.mp4",
            13: "https://pixel.cdn.cinemap.cc/4926cd2eea8401128daafb94e975aa59:2025122614/tvseries/2a87d3956c5346add701d682c30031a40b94f5d8/1080.mp4",
            14: "https://spark.cdn.cinemap.cc/a80647308fefdc77ceffab1033f96945:2025122614/tvseries/18b829c1b7b725f50e88f41b231ab68aa66265cc/1080.mp4",
            15: "https://strontium.cdn.cinemap.cc/072a71e7a92482f7730942a10fa984e9:2025122614/tvseries/2272e0443c71a47ec1e1475c5d104d3cbdbdd44d/1080.mp4",
            16: "https://explorer.cdn.cinemap.cc/dd58fe92fbe8b0efd2111d717ef9bde6:2025122614/tvseries/ebdcb55bdf278baa21eadecaea8e7b2014f1e06e/1080.mp4",
            17: "https://pixel.cdn.cinemap.cc/f56981e82a6119c176a5cc549936af6a:2025122614/tvseries/97cee2e0812ff785694322223e6ccd887d20cd74/1080.mp4",
            18: "https://mystic.cdn.cinemap.cc/15ed14dbf39a598fdc5614e901ccc73f:2025122614/tvseries/43c01b2019ae8eb2773fcb014e8c80699096f7b0/1080.mp4",
            19: "https://shadow.cdn.cinemap.cc/16c8321e5d65e84ad510bed1cff082e2:2025122614/tvseries/0e144139f1434e2d5f9cf271b9c2e1a7ec9ac5fb/1080.mp4   ",
            20: "https://noise.cdn.cinemap.cc/f76c7c01ae6b68807c39d4ccf8780066:2025122614/tvseries/102602fd5d75daec83246b845966a1293770aa59/1080.mp4",
            21: "https://atomic.cdn.cinemap.cc/3401845b87a969ff419066abd8f58c4a:2025122614/tvseries/18187af40d508f3e618595d7385d38c01b4d0fb1/1080.mp4",
            22: "https://kurt.cdn.cinemap.cc/79440fbcb9dbc4d05e8f0ff55a6e4c30:2025122614/tvseries/3efb9906e33e3150e338754c4fa5e4c3d77f5c57/1080.mp4",
            23: "https://osmium.cdn.cinemap.cc/92e718c9307101231127b2e4cf7c176e:2025122614/tvseries/505a0a7b9bbbd57ddfcfab83628ebb7f08c57101/1080.mp4",
            24: "https://apollo.cdn.cinemap.cc/9dc4b33c92cf7856d21fa07da7ce4989:2025122614/tvseries/508e5490513229552f133f5cdce11806250eaa01/1080.mp4",
            25: "https://lacerta.cdn.cinemap.cc/be2166a7ce3e36f9e247986a10b3d38c:2025122614/tvseries/2b9f9c08d00b317466c009b8cd81d731e0bcf7f9/1080.mp4",
            26: "https://strontium.cdn.cinemap.cc/a24041fe5a8bcfb7a6329e5dc5ac37e0:2025122614/tvseries/d0ff70015eef0ca8a0477511e3725953d34d87ef/1080.mp4"
        },
        5:{
            1: "https://viking.cdn.cinemap.cc/99eab94856c0cc167af3b5648ef26cf1:2025122614/tvseries/7c067154b24a80873eade242ecfa41c22a5336fe/1080.mp4",
            2: "https://stonehenge.cdn.cinemap.cc/fb31c1bddf1465992cd2fe856c05e25e:2025122614/tvseries/5e16215bbd26e1cfaca9bb060dfb26a572fe9239/1080.mp4",
            3: "https://fobetor.cdn.cinemap.cc/24db213dc6e49825776aceecddbc7b7e:2025122614/tvseries/d4c8f11bc87ff252b0b2df3df65b5d26c10f0705/1080.mp4",
            4: "https://nika.cdn.cinemap.cc/b1df5d8837baf2b73a4c1bab65727cd8:2025122614/tvseries/06605ac37fe75e7860ebbb8626adefb1ad19d70c/1080.mp4",
            5: "https://lyra.cdn.cinemap.cc/0f557200eac177de8402baa9c2b9883c:2025122614/tvseries/e45b5e5f4071f438c43a0b9cd69bf732634d3e89/1080.mp4",
            6: "https://relax.cdn.cinemap.cc/77095ffa5cbc0fee6bfe76171854e9ca:2025122614/tvseries/434e3807e58ab1c673abacbf538daff0c2b6afcd/1080.mp4",
            7: "https://monoceros.cdn.cinemap.cc/47513fb81e8a4e87864b0ec79549d192:2025122614/tvseries/819774f335b6f23f63591d0b7398253071d9161c/1080.mp4",
            8: "https://phoenix.cdn.cinemap.cc/e26221765caa37dcb7e20ae935099603:2025122614/tvseries/0b3b157767135ad06a8a9345d4898069888c8a73/1080.mp4",
            9: "https://turbo.cdn.cinemap.cc/7ef213d6a67ca7e80fa57b03effbb04a:2025122614/tvseries/80be3b273c319bd3e5295d9c32b3bafa070b96f7/1080.mp4",
            10: "https://phantom.cdn.cinemap.cc/8312124996e450ea9fbc934a14fb718b:2025122614/tvseries/ec10afa7b49b2f2013e98cccad395406c3b4c3bd/1080.mp4",
            11: "https://relax.cdn.cinemap.cc/ec9ba2dce13d51e6c319240a726fdd37:2025122614/tvseries/8461123f43b45da0b0f06a2ec63c772293a87b69/1080.mp4",
            12: "https://pioneer.cdn.cinemap.cc/4e06bd1a99aab77c4fe3eb98022fc041:2025122614/tvseries/cba4bba4fadefd9d693c65cb1db15eaa3967b0bc/1080.mp4",
            13: "https://sicarus.cdn.cinemap.cc/c71de502b82a3f746448c8dbce73ef02:2025122614/tvseries/f8896a543b004658136e7db9d641f4a4e4d1bcd5/1080.mp4",
            14: "https://corvus.cdn.cinemap.cc/79a2ab1ba588dc09f8ed0a4201912a46:2025122614/tvseries/2eb67577fe0971632e3747df04896b4839e4e9bb/1080.mp4",
            15: "https://consul.cdn.cinemap.cc/92b04a1d6adf72d8e9da963284629121:2025122614/tvseries/5f4549ac4c667601e5a6b11f4e27fda10f541047/1080.mp4",
            16: "https://aquila.cdn.cinemap.cc/24f1a43a187782e2d40c4eb68c1cb891:2025122614/tvseries/380aa3ef6968afefe1a7d8753e0bc974d8b9a4e7/1080.mp4",
            17: "https://octopus.cdn.cinemap.cc/085fd5fca0578e1c0d34c40fc5f22bfd:2025122614/tvseries/cb2875b30f706648910e9b1d4d3920fc1fbfd009/1080.mp4",
            18: "https://kurt.cdn.cinemap.cc/0d13d70ee28fff1517adbdf39ee1a243:2025122614/tvseries/faa1a9b420be5a95279c106e45fd813b3172e9c2/1080.mp4",
            19: "https://lipsium.cdn.cinemap.cc/e9518614e676858cfe9ff8433018bbaf:2025122614/tvseries/378a158d4f7ed75023cc3bb454baf9bf47a3c474/1080.mp4",
            20: "https://consul.cdn.cinemap.cc/b5cf4cd1e1386415d5d2609233b7277d:2025122614/tvseries/a5decffd8dffc86a725ceec8fd985d62c49069ed/1080.mp4",
            21: "https://limbo.cdn.cinemap.cc/c256030cd9d38f1d50c86b5737966662:2025122614/tvseries/6b54a0a0976bc6e37a40f787337642f0dcb3ea75/1080.mp4",
            22: "https://prism.cdn.cinemap.cc/383482b114cad004b4fbc7b44f19beb7:2025122614/tvseries/b22baac6efdf5646f661ac85badad732e325d5ec/1080.mp4",
            23: "https://polonium.cdn.cinemap.cc/40bf576094be44a4fbe926280a8774e4:2025122614/tvseries/143400720f8ed5c199c339cde5e09d0d6aa66338/1080.mp4"
        },
        6:{
            1: "https://nexus.cdn.cinemap.cc/b891dc4f297a3845f49ecda5bc8a58c3:2025122614/tvseries/6c6f4fafe92ee63becfda490ee78793c80aa57ea/720.mp4",
            2: "https://elvis.cdn.cinemap.cc/1b23f511ae9c28fa684167c2ba34d273:2025122614/tvseries/7125ed45a7f398aea3d9ae291bd3a489d579378f/720.mp4",
            3: "https://hydrus.cdn.cinemap.cc/b881e8d94c09a42e001462d938113ab1:2025122614/tvseries/258b5e8f156c97a1797ff2196421e58808cf5cd9/720.mp4",
            4: "https://mutantium.cdn.cinemap.cc/a08ca70008c47592fbc9b6fda588edee:2025122614/tvseries/2f2101cd48c53abe084cb796ee206710fb95a238/720.mp4",
            5: "https://tornado.cdn.cinemap.cc/8059c1de3504a4d5daad9da44f1edb45:2025122614/tvseries/dfcb236c66d41cfe09c7652ecb6c1a0b2b1edece/720.mp4",
            6: "https://lacerta.cdn.cinemap.cc/a629bc64832449abfb66f4957a6df554:2025122614/tvseries/5cbcf27fa004812d857883a302a11cbc496b940c/720.mp4",
            7: "https://kraken.cdn.cinemap.cc/76d3394c449f3c8ce6431b8fca525d66:2025122614/tvseries/4cd7dccc87d384ead46ab49c7b6c374c5972adc0/720.mp4 ",
            8: "https://locust.cdn.cinemap.cc/aef22e86c6402b7c64375c9e17a4c78b:2025122614/tvseries/b7b00fc3eb21f8647ea89480e4bcee165f9b58a4/720.mp4",
            9: "https://polaris.cdn.cinemap.cc/0f395be2c742a98dc0ed389a4afe973c:2025122614/tvseries/d08e89fad821ff54ef52d710c61d00463eb90dee/720.mp4",
            10: "https://noise.cdn.cinemap.cc/e3ac749a3f23a0c292fd655c9284d63c:2025122614/tvseries/ec8ab465534916c4fb8c2cb2321d141ed7bb7999/720.mp4",
            11: "https://dysprosium.cdn.cinemap.cc/23bd44edcdc95d98451cb4555aa3d514:2025122614/tvseries/a4a1963a084d1275f299a576419ba726f1aaa1e2/720.mp4",
            12: "https://turbo.cdn.cinemap.cc/7c935eab2e2facdcf9123f0f97ce3d43:2025122614/tvseries/2892821d6daef06e61c17f7b4bde2864e11a1403/720.mp4",
            13: "https://lacerta.cdn.cinemap.cc/ef650c2f8e8fb88fc2925f61e050498f:2025122614/tvseries/62a8b78c1ca77e1fb0f29f6cc59adefbd1f95c93/720.mp4",
            14: "https://cobra.cdn.cinemap.cc/6daffc2f77fdafaaba290673eb8b7731:2025122614/tvseries/ba63a12f2af881fc4b5810c9c2e178e2e1b1a38c/720.mp4",
            15: "https://rock.cdn.cinemap.cc/690b65835fd19ccadd63fd0e12d04239:2025122614/tvseries/3b84bc073de6ce1aea852fc489d15fd1ce5524b8/720.mp4",
            16: "https://sagitta.cdn.cinemap.cc/ce6e2610059dcd57f5976bacaed6a75d:2025122614/tvseries/5e93482211aa467be80806f3de9b7661ce04fa35/720.mp4",
            17: "https://fobetor.cdn.cinemap.cc/064ca3320f38490abf7afeb2bbf5e0ab:2025122614/tvseries/fa67846635b56ecd696a93fb3925e66424127e58/720.mp4",
            18: "https://explorer.cdn.cinemap.cc/034800ccc1be5bfaad43940c2bec0007:2025122614/tvseries/11f2a23794c3e107bd3c92bd2557b4bcd92d1935/720.mp4",
            19: "https://milanium.cdn.cinemap.cc/9f579d78d13fb71e0a88c0fc2d0b411a:2025122614/tvseries/c25e136a7a9bcc80aa6ef6b30e3e521a27d30b7b/720.mp4",
            20: "https://apollo.cdn.cinemap.cc/21fb225e5c425421e1a3843fce5d2c1c:2025122614/tvseries/5e5e49b8943085e8c5983559d8fd29c160e921ab/720.mp4",
            21: "https://phaeton.cdn.cinemap.cc/6fef470e4446df207f3428414f8a034e:2025122614/tvseries/ab3fb8ac46cfaffbaee9ab4b065ab8e23722fd33/720.mp4",
            22: "https://baator.cdn.cinemap.cc/345c58c36c43e7aa85ada38f4ab21503:2025122614/tvseries/be73e617f0f1a2599f93cd592616f95e99c6843e/720.mp4",
            23: "https://cobra.cdn.cinemap.cc/45b30bc7377679fcd04770b48c273c0d:2025122614/tvseries/3f9b357b1d19901c12be13c503ee6991b39d23ac/720.mp4",
            24: "https://calypso.cdn.cinemap.cc/a23008105c62194c9650dc0e7d618f8d:2025122614/tvseries/dc54644f3acffd31df0b72c417551d8bd19e3fd7/720.mp4"
        },
        7:{
            1: "https://pioneer.cdn.cinemap.cc/6b284adda302f62051b4f6b790a23c0e:2025122615/tvseries/a86a19e45a74e4156446a4ad24be8506f75f5065/720.mp4",
            2: "https://secret.cdn.cinemap.cc/58d05c0dde119e4bda7f1cf69def1a4c:2025122615/tvseries/c19fa2951bb42011bf74c9559395951d2e1260e8/720.mp4",
            3: "https://tornado.cdn.cinemap.cc/1ee97459db92b8f270d0e9cb19af0cf2:2025122615/tvseries/952e53c66f522de494e71fb04e87829ec6d7e79c/720.mp4",
            4: "https://relax.cdn.cinemap.cc/94ade204f8cf96a5ff4fadbfcbcf0e72:2025122615/tvseries/37d925c5e7b6c8eae0b6d89ffd8fb2b8c769343a/720.mp4",
            5: "https://wasp.cdn.cinemap.cc/593301f1d0e75b68967a0a61f0a69d45:2025122615/tvseries/13c934c86ba7393fe16255d73b32ccdec28c2ba6/720.mp4",
            6: "https://relax.cdn.cinemap.cc/3a32399813d01869cd9e31dc72048a32:2025122615/tvseries/ed1d88a1e77dc317307483d4f5872574d1c70667/720.mp4",
            7: "https://fenris.cdn.cinemap.cc/98c74fef6b1a8d963f97711a26c97e92:2025122615/tvseries/efbb39c9b240d4d2500a1f5d0ceb89989e751a72/720.mp4",
            8: "https://tornado.cdn.cinemap.cc/71b1ed707147a7c136d101f826470d40:2025122615/tvseries/d39e1f54deac781e5197cf6bd904f3ccac67fa7f/720.mp4",
            9: "https://atlas.cdn.cinemap.cc/1d09bcd928348f3f9d82d5b7142299e1:2025122615/tvseries/3e0817b52f78f63a9b0b88ae8cb409f26d57db3e/720.mp4",
            10: "https://sierra.cdn.cinemap.cc/888337710a278e0909889a9a9502386f:2025122615/tvseries/223aa8940640688c51ec52f03c1505e60538dfb6/720.mp4",
            11: "https://sierra.cdn.cinemap.cc/12bd40bbdd33efab75cba5e903d96379:2025122615/tvseries/a053fcb2161c0cf8da4d030ac091978d63e83611/720.mp4",
            12: "https://druid.cdn.cinemap.cc/c651ba74b2528b42af70a9fc41cca798:2025122615/tvseries/42c786b1fb456df4296a0280257a2c74a310e800/720.mp4",
            13: "https://nexus.cdn.cinemap.cc/0cca773551ab805c10892e96d5a88542:2025122615/tvseries/a1d45829970523477b23ec998cda609b3d038752/720.mp4",
            14: "https://phantom.cdn.cinemap.cc/b8e3ab54365c9e04482affc45856cc72:2025122615/tvseries/e4b2bed52e13cb16908238ce18d1706f24080bdd/720.mp4",
            15: "https://consul.cdn.cinemap.cc/ba83d4545ab11a876cd79a667093c04c:2025122615/tvseries/98e89abed3a5f224c6691ffa99ac4fe15a6d1fa3/720.mp4",
            16: "https://fiber.cdn.cinemap.cc/c03c3fe705ee0c5215bfd07425a5bb82:2025122615/tvseries/0680708c3716849ea004efafccb441b1befb6af6/720.mp4",
            17: "https://polaris.cdn.cinemap.cc/db7faf6420a3b62a33c126634899bcf7:2025122615/tvseries/1b67e96d06584a555e15c1ef56c7fcb2b32792ad/720.mp4",
            18: "https://monoceros.cdn.cinemap.cc/f072a92e33a9e0d03bed0c0f9bee1c62:2025122615/tvseries/9729a765d57e3875d22524def515489162e74bad/720.mp4",
            19: "https://silence.cdn.cinemap.cc/664744f82a55598626575b9f025cda02:2025122615/tvseries/8349e3f6b1bb675757795d9502dd66e44c25736f/720.mp4",
            20: "https://sierra.cdn.cinemap.cc/6e6274d08651df9f3344f1de18663a85:2025122615/tvseries/55679a8948c3a2e477fcdd720bbd1d9895b52e26/720.mp4",
            21: "https://cdn.cinemap.cc/8114077f9fdd0e8766e319758f2b64a4:2025122615/tvseries/2419d12febb213337a16a47571c177441502a276/720.mp4",
            22: "https://cdn.cinemap.cc/f7958bf94ccea5619e5b412a18abdfbc:2025122615/tvseries/a521b48eb65e48ee11884d951b8bce46ca758754/720.mp4",
            23: "https://silence.cdn.cinemap.cc/f706f8f4de18fa76f3b1a943f314437c:2025122615/tvseries/26ef1888f3dffdc602df9e014e6aaa64b7270434/720.mp4"
        },
        8:{
            1: "https://jointinum.cdn.cinemap.cc/7fce476842b4d5920a92c329841ee3e9:2025122615/tvseries/d745774c2a61e136addb83f00a2eb79559ebebae/1080.mp4",
            2: "https://terbium.cdn.cinemap.cc/f459dd4dc2f0998ac32d0c705423ff93:2025122615/tvseries/eb75cc847fe8a9e77492756b6dfb250f83dd1769/1080.mp4   ",
            3: "https://kraken.cdn.cinemap.cc/7915b3b7e17e407252c47677aa8be1b5:2025122615/tvseries/ecb0cf42ebad0d8969668ab0d9fa306ceb897d6d/1080.mp4",
            4: "https://fractal.cdn.cinemap.cc/5904cc8cfeb5cc62b73f27b946cee4ca:2025122615/tvseries/604788f28046ce94c1caff579c84343fce3ed179/1080.mp4",
            5: "https://lyra.cdn.cinemap.cc/8f970fc53cbe7a75b58e1adb5dbddae1:2025122615/tvseries/b564fd8980d15de319cabce07c6fe28cfb84ce05/1080.mp4",
            6: "https://tornado.cdn.cinemap.cc/6b6cdb921ced8e3ce552e1e6121b8f2f:2025122615/tvseries/3454ded1f4e48e70f69c1f7f2a6ca306a98afad7/1080.mp4",
            7: "https://cadmium.cdn.cinemap.cc/fc792cd2cde6abdf6914afee5b7db191:2025122615/tvseries/3426d3ed23334e9a96fb8ae3fa3549adbb69b6bb/1080.mp4",
            8: "https://consul.cdn.cinemap.cc/0c973d99d4241ecfe0acf5be3b7ec5ed:2025122615/tvseries/fa44bb98c9d0bbf7590a169f23c1553d0930fc30/1080.mp4",
            9: "https://celestia.cdn.cinemap.cc/9190f706ed8e69eb6d1166490f5dd0e9:2025122615/tvseries/84e6447e632f4521b4ca8f0ab84e1be7fed377d4/1080.mp4",
            10: "https://aurum.cdn.cinemap.cc/f027260c3b1f924b30bab9dca104124d:2025122615/tvseries/4e22f08ffb9765380705f565b3e4cc0aa7856a88/1080.mp4",
            11: "https://acheron.cdn.cinemap.cc/ed5a4b30f8280c8d532a459f46f25ea8:2025122615/tvseries/f11bac1ce39e187c5c59a4466530ad8ebfc05305/1080.mp4",
            12: "https://octopus.cdn.cinemap.cc/283cd4c56c83b0b871b3a56db09803e5:2025122615/tvseries/14573df263efa463bf8b353fd2028a57d7ce3f71/1080.mp4",
            13: "https://hammer.cdn.cinemap.cc/813b0f149429daf2a91f8a614f75a075:2025122615/tvseries/371bd7fee19b40eaf7e5cf9a3b3a92e2283ddd95/1080.mp4",
            14: "https://enigma.cdn.cinemap.cc/a3a385987d84e47d8a1bcdc24c100193:2025122615/tvseries/df194c1580c1a2f0df6b8756e70d0a8813db3026/1080.mp4",
            15: "https://phantom.cdn.cinemap.cc/e069350695541e375be7eb84d5250cd8:2025122615/tvseries/caf291a1bad302976ed3618dd26471d483e01865/1080.mp4",
            16: "https://lyra.cdn.cinemap.cc/56ebe091fb42968fa551c01954ace48e:2025122615/tvseries/50c447b6edce80d28740996fbf6b2207c4c4d5f3/1080.mp4",
            17: "https://turbo.cdn.cinemap.cc/a4f16bd6b675ca940d62e17253a6f60d:2025122615/tvseries/73f5788da0fee102cf09d98b83e62d3d210f534c/1080.mp4",
            18: "https://beryllium.cdn.cinemap.cc/9020bb9c3b1bb610181fef9223de8e89:2025122615/tvseries/3a2047f7b3b1ac58686cf0713ec7b1b2e67b478e/1080.mp4",
            19: "https://fenris.cdn.cinemap.cc/462ac074a2faa994fa24211d50099e75:2025122615/tvseries/024d702f8849d8929e865ccccdae9604cbb43414/1080.mp4",
            20: "https://nuceria.cdn.cinemap.cc/f8ad363fccc287da0606b1eb809140e2:2025122615/tvseries/ecba2aa8f0503e0c5e2c6352637c24dd7da393c4/1080.mp4",
            21: "https://wasp.cdn.cinemap.cc/88aaabc5c5f067bbb9dd6dafd2f051ff:2025122615/tvseries/056fa3220ef0ac645b3953a93093c6ee9b6c8c15/1080.mp4",
            22: "https://flora.cdn.cinemap.cc/866a38af65db0884eb689c6d66b1bb85:2025122615/tvseries/3eebcece2aa0d550b2323aa730e4ece9bb0939d0/1080.mp4",
            23: "https://monoceros.cdn.cinemap.cc/c529c7344023cbe523da1868b7b22f33:2025122615/tvseries/2d3ce9d3d67ad348cc60eb7288e880ec3bbe3162/1080.mp4"
        },
        9:{
            1: "https://meteor.cdn.cinemap.cc/7e420fa8732ba4e071f25f22591644de:2025122615/tvseries/421aed98ab0bd78e2e13e613d1b1f9192e6f3a0e/1080.mp4",
            2: "https://vespene.cdn.cinemap.cc/56b7f6d9bd267deda5130b755f349631:2025122615/tvseries/f7b509b04feaf4c2d9236d9573b16820b3e073cd/1080.mp4",
            3: "https://cobra.cdn.cinemap.cc/62d3a86d958c62905195521ba016f69f:2025122615/tvseries/bedf410913bc1bdae0b736ed939e97cafed51cf2/1080.mp4",
            4: "https://nirvana.cdn.cinemap.cc/7c9546e06d376a92fa5b42c104494b96:2025122615/tvseries/d787d40be713ed140da9919e9b85e182aa4fe8b2/1080.mp4",
            5: "https://apollo.cdn.cinemap.cc/ff7059a32145fecf7f6cc441f8d013c5:2025122615/tvseries/0b3f5f4f4a4ea87593388a428a88490e75589d39/1080.mp4",
            6: "https://vespene.cdn.cinemap.cc/e924b44caa0c64bce9585b9e34630b38:2025122615/tvseries/6ca5caa391215cc18d89de9fc831b8600577627a/1080.mp4",
            7: "https://silence.cdn.cinemap.cc/d046d1126a7ff2882afe996ef673cdf6:2025122615/tvseries/ed599fa160fc717c7f5f3388873666fc1302914a/1080.mp4",
            8: "https://apollo.cdn.cinemap.cc/75cbf8b374ca69f16674df6b2f29f7d0:2025122615/tvseries/1851e7e7963a951f619c2466a7294c845563e30b/1080.mp4",
            9: "https://locust.cdn.cinemap.cc/5a95e8abd0663481459699537618bb2c:2025122615/tvseries/62bd4b747bc27e240047ffb7bb3414bc86bc4b22/1080.mp4",
            10: "https://milanium.cdn.cinemap.cc/6b2fbf891be10d5d5e97c9bd58e326e3:2025122615/tvseries/92a2803314f4ddf836811152c8bec190e1aa1d0f/1080.mp4",
            11: "https://pegasus.cdn.cinemap.cc/3446efac5615eb9bc97335e94ad049fd:2025122615/tvseries/e1f9c24e460f69c10470a86cbd0451f0beeef19d/1080.mp4",
            12: "https://gadolinium.cdn.cinemap.cc/cc9778942125879927d621f12d835d19:2025122615/tvseries/0e42c220ff8750e4ad143949b4a25940d25bb347/1080.mp4",
            13: "https://pe.cdn.cinemap.cc/9d82e6b7c6b62aeec55480834dcac9e0:2025122615/tvseries/2ee4865a584859144b0def1c9dcee453db5af8cc/1080.mp4",
            14: "https://astatium.cdn.cinemap.cc/38f3cf0a441825fb1f0af13c91865e32:2025122615/tvseries/054b307c3cfd79be4ecc7bbd7c0589f8ae9e66a7/1080.mp4",
            15: "https://osmium.cdn.cinemap.cc/7770edbba5f3c5660c8a4e2596cb960b:2025122615/tvseries/f206d7162bb0096e150b3a5d3ab8e1f463e0bdc2/1080.mp4",
            16: "https://skullium.cdn.cinemap.cc/624a14d24ab5e6f256f4c8d356cf9172:2025122615/tvseries/2f93769805e9b16846a94b2d9c9e64867ec49def/1080.mp4",
            17: "https://fingerium.cdn.cinemap.cc/3eec70b9830071bd9ae436881e1f1f81:2025122615/tvseries/828a296a3c2dccc41c198a7e2bb4418306e613ab/1080.mp4",
            18: "https://orion.cdn.cinemap.cc/75f14df14760f370d3732ff687c4efba:2025122615/tvseries/42dd183c4de8ac10696b59fe77d1f289cfce21fe/1080.mp4",
            19: "https://anteros.cdn.cinemap.cc/f2b9d17fe69c0756d637c240f36853cb:2025122615/tvseries/6350f9968d47abe070e23d4f8e548f7609884d8c/1080.mp4",
            20: "https://potassium.cdn.cinemap.cc/9fe8025ec83b9e309939efa8ff1fa355:2025122615/tvseries/83e64435ebb6972e4fefacc84b7c3c1f85f947b5/1080.mp4",
            21: "https://maxima.cdn.cinemap.cc/cd81b536e73c77cff45b3d47d845e46c:2025122615/tvseries/464532da78966bd5985080ae79593ec1f0157d4a/1080.mp4",
            22: "https://apollo.cdn.cinemap.cc/f35959a1678ac02cd812173e98d7d438:2025122615/tvseries/5777d7ad4768fb62b9af73dcadb352a146596dba/1080.mp4",
            23: "https://athens.cdn.cinemap.cc/62be6997087723210702efb0b63e4917:2025122615/tvseries/39edab64b89ee820432ae8f1249f3a7b9f4db5c2/1080.mp4",
            24: "https://lyra.cdn.cinemap.cc/949abe10ae4a1d2945046084f2cb1434:2025122615/tvseries/9112b446e1c48fed5fe4ca177b52bf645ceeda29/1080.mp4"
        },
        10:{
            1: "https://tornado.cdn.cinemap.cc/b665960ee222e04415ba8a0fce5b4bc7:2025122616/tvseries/574c4c962876f64c7b255678ce3bcd45d05f3e7b/1080.mp4",
            2: "https://hipium.cdn.cinemap.cc/161886b7885e74c351ff5204b85e6bd7:2025122616/tvseries/bf6ffe91c501ddc947906d6c874b8933fa16e909/1080.mp4",
            3: "https://pixel.cdn.cinemap.cc/c9b794b11c02568457802a23d7354999:2025122616/tvseries/6f3c0a0cc3bc4a948957506adef887695a717cc9/1080.mp4",
            4: "https://fingerium.cdn.cinemap.cc/03aa1939ae713c854741b2230c7a6660:2025122616/tvseries/0e6648e6192f3d6d9dd28c91a93ba89caca71cda/1080.mp4",
            5: "https://centaurus.cdn.cinemap.cc/277a7c313e30f29e0dbc7f53e7c34188:2025122616/tvseries/afa055135c6b37d8b83120165f4a4a06582b949c/1080.mp4",
            6: "https://gadolinium.cdn.cinemap.cc/c7ce32cc559a9fa37ab1861dbef8b4f1:2025122616/tvseries/ad23bcfbc8bd80d5d09c5cd16cdb10230b678907/1080.mp4",
            7: "https://limbo.cdn.cinemap.cc/10c48951fe2952085de68170017498a8:2025122616/tvseries/23f346ed5f032193a105a98a682ee7bf257d2962/1080.mp4",
            8: "https://cdn.cinemap.cc/62ed0bb0455bf34206fc323f564c1ff1:2025122616/tvseries/1b890961495ee9522422c694ae6cf04225ac69bb/1080.mp4",
            9: "https://octopus.cdn.cinemap.cc/0e30e7e9eb3149c80395a808b73d75be:2025122616/tvseries/32ba3e5d2310bc941726f3249d6e596b61105b02/1080.mp4",
            10: "https://athens.cdn.cinemap.cc/ae373c7765ced33e4d1bd535e3f7d842:2025122616/tvseries/d9ca7e7b8913e5300305c1dd9ef86350556e97da/1080.mp4",
            11: "https://zigzag.cdn.cinemap.cc/a014027e79fbcf1c169b7c7d41ccb039:2025122616/tvseries/7232b813c57904172490c37106474bea83b0e3c9/1080.mp4",
            12: "https://noise.cdn.cinemap.cc/e15247774631ec93bff13f63f40449d6:2025122616/tvseries/994c88c18d991368db4aa86462ab1d4976428a4e/1080.mp4",
            13: "https://corvus.cdn.cinemap.cc/91d1353590179f6cbcba3080b1ff631b:2025122616/tvseries/89f8218744c3f0ba8b16af04207880dcf557069b/1080.mp4",
            14: "https://astatium.cdn.cinemap.cc/817f6d4423dc505a2ab60a82d6d00893:2025122616/tvseries/3eb2f3d1689ad4943712a16bfc6307818407c4cc/1080.mp4",
            15: "https://phoenix.cdn.cinemap.cc/522efeaeb56ad40c6c4be99352116970:2025122616/tvseries/942cb7132527210d1ca0ae9744c6a3c9ce685000/1080.mp4",
            16: "https://serpens.cdn.cinemap.cc/16e51dcb02dab1ce00872bfbd7f84284:2025122616/tvseries/dc5e53ac8a8b3f8178e60bacbaafd680229022fa/1080.mp4",
            17: "https://nova.cdn.cinemap.cc/491ac97cd559fef7cf823c6a43363f5b:2025122616/tvseries/e252e8bb035d1d65b308110c446944c76b23b507/1080.mp4",
            18: "https://paradox.cdn.cinemap.cc/3185bfcc8341d76ef0b5e33479ae0464:2025122616/tvseries/cb6997c8bdf9e4688bac1b43f4adbdb8dc271b4e/1080.mp4",
            19: "https://badger.cdn.cinemap.cc/5f78a0421900892d649be5d95a8bba42:2025122616/tvseries/b5a25a84684ea5fe4dd546d700c14c9833010fab/1080.mp4",
            20: "https://scorpius.cdn.cinemap.cc/8dd08c35ca200c328e9bb1ab4553da37:2025122616/tvseries/6045d96599ce150846184bcde2727280c37e5e55/1080.mp4",
            21: "https://jointinum.cdn.cinemap.cc/a163687de429ab1dd5c5aa23168e1c76:2025122616/tvseries/abf08bdb69b0bc8565d8c0313a696f26d5c98c76/1080.mp4",
            22: "https://druid.cdn.cinemap.cc/1110a689845457b72074f15568a50335:2025122616/tvseries/a21367adf226c24e76f4d2368c59966f5ba35bd4/1080.mp4",
            23: "https://monoceros.cdn.cinemap.cc/966de751795919fdb68ace572fc3623d:2025122616/tvseries/b5dd9849e0fffe42f990d007c5e0baebdf52d51e/1080.mp4"
        },
        11:{
            1: "https://cadmium.cdn.cinemap.cc/cb21342098c29c3f83ac28de6bfd5051:2025122616/tvseries/d82e2256f8b94b540bd52c5961b63596e2aa34d1/1080.mp4",
            2: "https://iridium.cdn.cinemap.cc/a533b8d5b20ac8f207b74c1e203c165d:2025122616/tvseries/9c627bf1e2d72ae197cd83d3901470a5ddc5d7b8/1080.mp4",
            3: "https://vacuum.cdn.cinemap.cc/3456afcf6b20b447799757654ed15ff6:2025122616/tvseries/6fa5c1bad70091c579b79b4d0910439b732201e1/1080.mp4",
            4: "https://petra.cdn.cinemap.cc/8bb79d0f063cf891032f3b3f24940693:2025122616/tvseries/cfa2e6aa59e332f54d91ff6e544b8b9ccd336a0c/1080.mp4",
            5: "https://scorpius.cdn.cinemap.cc/da89a427d1733283fcd947c82e57da6d:2025122616/tvseries/57bf6916f0a914f8810e4dbf835b698ff5810828/1080.mp4",
            6: "https://cometa.cdn.cinemap.cc/d9e765c4fb8c27847e6c07b1b5074bcb:2025122616/tvseries/d000606745c7ee22c51dfe6d30f1d6a0273a0afb/1080.mp4",
            7: "https://glory.cdn.cinemap.cc/38ad37130979d1f7a3046918d6fdf5a0:2025122616/tvseries/cbfae1df0d93f735f315542f27022d2a59a7eb29/1080.mp4",
            8: "https://prism.cdn.cinemap.cc/ec015895e86f33dc30f1b74c61f41166:2025122616/tvseries/f73e799a532f56c4d1057cffc775f98d1ac0c0d5/1080.mp4",
            9: "https://orion.cdn.cinemap.cc/46fe06209d478ea5efae134a908efc57:2025122616/tvseries/c632ae4090618975097d654acd45cd25967ca289/1080.mp4",
            10: "https://nika.cdn.cinemap.cc/e39342a6fb6e752088a6905a93cbdac6:2025122616/tvseries/7fb507e210d3da3fdceb73cfcc08a5fed0dcefbd/1080.mp4",
            11: "https://vespene.cdn.cinemap.cc/b924575f7e479f381498501616ea4a77:2025122616/tvseries/3e1d06c407f2dceabc73023fab54fdf78a633dd7/1080.mp4",
            12: "https://matrix.cdn.cinemap.cc/e36827723dbcf8c5e1ad576e2460add6:2025122616/tvseries/76dd9db98f2d2ee815ee5fb6c29704628870b9df/1080.mp4",
            13: "https://phantom.cdn.cinemap.cc/a03d5ba29dbfa83ba83ad44d13531c23:2025122616/tvseries/54176245461e6a1a870ce600a6122b9988dbec24/1080.mp4",
            14: "https://relax.cdn.cinemap.cc/7d3893815696d66e17965b4b825223cf:2025122616/tvseries/150a06d57fe1d736993b27a070376529fda7e466/1080.mp4",
            15: "https://acheron.cdn.cinemap.cc/4ff0ac2f7fd3ed70f0f1e677c9d797ec:2025122616/tvseries/0c7320c2c9781f21dc771acc8679e50258e3fe91/1080.mp4",
            16: "https://meteor.cdn.cinemap.cc/9741687b2af2f7a2610a1a964fe9cbb4:2025122616/tvseries/6a3536878fe73cba3f21b005079b229ec4891852/1080.mp4",
            17: "https://bytopia.cdn.cinemap.cc/5a256d0857beb7bba1096bfd3f2594f0:2025122616/tvseries/5f78fa15de6e6f74821a300e04d0d87b0d5b3afc/1080.mp4",
            18: "https://apollo.cdn.cinemap.cc/8b0c5244d5644e9580c8219e7888a106:2025122616/tvseries/32722534c6fe1702e1d6da149542fa8b02044e22/1080.mp4",
            19: "https://scorpius.cdn.cinemap.cc/3517ec0184c1c03e2a5bb61067397774:2025122616/tvseries/739ce463181e7faaada39466d96b6ed14e5111ab/1080.mp4",
            20: "https://terbium.cdn.cinemap.cc/9f2c3f82a568ca4f195e36dce51bd9f1:2025122616/tvseries/631c01b02482c9e5866e4386761fc0a85d9d35ff/1080.mp4",
            21: "https://pe.cdn.cinemap.cc/0364abcbdea715370863470633162ca0:2025122616/tvseries/43754433d0e4b9669e7d73f72d75f2eb4813ab39/1080.mp4",
            22: "https://shadow.cdn.cinemap.cc/93b0f99b6be9816306ec3e4dbffcde5a:2025122616/tvseries/7ed2be8a7e4d98027f26fc9721dd0bc1000c78f7/1080.mp4"
        },
        12:{
            1: "https://hydrus.cdn.cinemap.cc/1abf62a5b10a846252a664c1714925f1:2025122616/tvseries/97061d05ad2a2752ac54eb94f55be42e18da2241/1080.mp4",
            2: "https://druid.cdn.cinemap.cc/bea4a6cd2971ed8ec6af34d3f060e123:2025122616/tvseries/a63ad9bdb3e69eb52972d2ca49f42b951b847a2a/1080.mp4",
            3: "https://lyra.cdn.cinemap.cc/a2fa5fc862847e8efcba8f29a8497b21:2025122616/tvseries/d2df1edb658a6054e65ca8ac827f90ec39466ff8/1080.mp4",
            4: "https://strontium.cdn.cinemap.cc/63b5265a3cd3594cbeb1ab25fa6d80c3:2025122616/tvseries/6a8a83a6ad2ad0ed32c94c2bd5001c6b708a02f1/1080.mp4",
            5: "https://eclipse.cdn.cinemap.cc/e3e93c01ff41f143f3d69d18f66d014b:2025122616/tvseries/e257f5c1a9b579390f9abaf0b4f124a7c097f4da/1080.mp4",
            6: "https://ranger.cdn.cinemap.cc/e0cc1f6974088cc2e5cb42339e31cf12:2025122616/tvseries/f6e6869d10b4bf608854028bf092acac6995a33d/1080.mp4",
            7: "https://lutetium.cdn.cinemap.cc/19115af05cc2b9ed959a24f1f87f4e32:2025122616/tvseries/42614d11ae0b08c20c479cee3430d2909af2e483/1080.mp4",
            8: "https://secret.cdn.cinemap.cc/7874b8f07ab4d47d2cf34dade429be5f:2025122616/tvseries/eebe90aa0a380a1a4c9636c4518497983b767fc5/1080.mp4",
            9: "https://lutetium.cdn.cinemap.cc/51315ae6ce2b35466878e865e41c3091:2025122616/tvseries/c207a17f0043a18e55d1d370dd0208bfbc042375/1080.mp4",
            10: "https://hammer.cdn.cinemap.cc/57e3a4bfb434bb19bd1449bf77f1a3a9:2025122616/tvseries/e512ffb63e258383a41fd257924600ac501ef5ea/1080.mp4",
            11: "https://draco.cdn.cinemap.cc/a6eebea36a93c76e3f2c93a54fc74fcc:2025122616/tvseries/1570e30e0f89de64efc1feb707b38c001d8b600b/1080.mp4",
            12: "https://prism.cdn.cinemap.cc/8e97d3eb4f1475ccedb6da7f8c6bd70a:2025122616/tvseries/8fd8680bb4dafecf7f4e1b784024ebfc6b6c2cc9/1080.mp4",
            13: "https://bingo.cdn.cinemap.cc/f8c7cc9b867ea3887f2bb1b6be535aef:2025122616/tvseries/a112eb23e98e4bc865bd9dd3862525c326d75819/1080.mp4",
            14: "https://nailium.cdn.cinemap.cc/9714c7414d5d0d2f8a08837a60286447:2025122616/tvseries/039a3360fedb29bc9dcfe82b3c2da41593aae012/1080.mp4",
            15: "https://skullium.cdn.cinemap.cc/622eac7080dff073b55a9aac3986196e:2025122616/tvseries/3e812c06208a726cb97d34345625d0c443dd7c8b/1080.mp4",
            16: "https://navelium.cdn.cinemap.cc/d1cd75210928b5b80097bb75c9a313a2:2025122616/tvseries/a7d6cf4a4abb1b3b1788af26ce3cbed2392da2a9/1080.mp4",
            17: "https://prism.cdn.cinemap.cc/2c0523d0d537ac824557671b8e24bbb1:2025122616/tvseries/16d1a9f928d35276a4371c68178b64ad08e2551c/1080.mp4",
            18: "https://ununbium.cdn.cinemap.cc/57f7fe2df72a8fb199c93b87a902d444:2025122616/tvseries/efd0705476adbf5233fffc5cf8f740446c86aba6/1080.mp4",
            19: "https://apollo.cdn.cinemap.cc/a2242005dfdf39220949e17d9d14e48c:2025122616/tvseries/c4fd80b6f93df7f1f954b9c41b07e57e2a77d918/1080.mp4",
            20: "https://nirvana.cdn.cinemap.cc/e2d0f1406a9e49f746be326e9dd145a4:2025122616/tvseries/5396a72f9cc471adefb7559dcc0ade0f7fb998d0/1080.mp4",
            21: "https://calypso.cdn.cinemap.cc/bf0ac992de326ef64a6e204c0d7261a8:2025122616/tvseries/46e35dd3e5f93418380d1ba2c664aa736922de3b/1080.mp4",
            22: "https://francium.cdn.cinemap.cc/3f3628178da37d47a88dfce75ba46f0b:2025122616/tvseries/3a65ce7bfe9978daa6d2932c59d03a2811718669/1080.mp4"
        },
        13:{
            1: "https://druid.cdn.cinemap.cc/074730ccd5de7a994ce1780add2cd640:2025122616/tvseries/2799dd2ce7bf1d701813d579cb5c5e18ffcb8910/1080.mp4",
            2: "https://beryllium.cdn.cinemap.cc/d3bceda2e017bf7d0a37a092d4826471:2025122616/tvseries/677327ff6884feba9889e8eef2539fcabfb8bd41/1080.mp4",
            3: "https://milanium.cdn.cinemap.cc/4ffd5c76d6c0173c889dda9386299e5b:2025122616/tvseries/d1e9ed9c0d63ebc9e197a9896483697118faed29/1080.mp4",
            4: "https://lucky.cdn.cinemap.cc/2f782fbf9abdde6ec8311b1cf9d76312:2025122616/tvseries/4f0a0c0559ef4fcc1a74a33f9cf57d46cd2de915/1080.mp4",
            5: "https://rocker.cdn.cinemap.cc/fc1f40b818ed586e468c46e5b4d1146c:2025122616/tvseries/bd8d94c2c82dbccf4ec1bd86ced09e8c08bd102e/1080.mp4",
            6: "https://pe.cdn.cinemap.cc/93552d7c2199cfa1960f150c3f4f533f:2025122616/tvseries/6c8219dfeffa46496733b6f9e0299c5ed08dadc8/1080.mp4",
            7: "https://noise.cdn.cinemap.cc/5de2eb61e8c5ddae873101c408fd6bb7:2025122616/tvseries/11d08500f1125936ece35546e62903260217cd57/1080.mp4",
            8: "https://rocker.cdn.cinemap.cc/6f3f3900cc31205028c4dd45abd9617b:2025122616/tvseries/fb0bfe00b5e0789dbcebdb9c3d5f2d26d66c580e/1080.mp4",
            9: "https://olympus.cdn.cinemap.cc/ef7db373c8b10c391d951d08f5fffb15:2025122616/tvseries/9caffc771bbf773e510cd44be29380adfbdf4d86/1080.mp4",
            10: "https://pioneer.cdn.cinemap.cc/0fb12a569c9a11d5b825925571727bec:2025122616/tvseries/c32913c6fee13b8b19391c138b47a5f8f875b94a/1080.mp4",
            11: "https://strontium.cdn.cinemap.cc/a0c1fe33182557617a931395c3ee4957:2025122616/tvseries/15fcd8ac62aace89b5f8be7721ce274b3009ce50/1080.mp4",
            12: "https://petra.cdn.cinemap.cc/2138ee72e4aa172668a86f519e435eda:2025122616/tvseries/1a79a4cdb41f5e6a238e7e8e0e2f5d8a5ce07a7f/1080.mp4",
            13: "https://shadow.cdn.cinemap.cc/47e122e073279ee7f38778d3c7c9cdc7:2025122616/tvseries/e9b67c6e47e35d492d32a84709d79cab85d02139/1080.mp4",
            14: "https://astatium.cdn.cinemap.cc/9e56c340c02513ada5303a73b1f98ac4:2025122616/tvseries/8f7ad0aea676652595b27d7d9f967c470105b704/1080.mp4",
            15: "https://kraken.cdn.cinemap.cc/d661220911a548a6c59001f11c69fbcf:2025122616/tvseries/8453f59dfe263f1004a25da36d44b0fb30b334ec/1080.mp4",
            16: "https://palmium.cdn.cinemap.cc/067052654e55fe880c00a57e5ed156f9:2025122616/tvseries/6dcca30270b1068c147808b80a131789a3a3cb07/1080.mp4",
            17: "https://silence.cdn.cinemap.cc/93d96d23a1acfa197777c2f8fcafc8b5:2025122616/tvseries/b56b7c96dd830dfaaf0d5c9753e5078dcbee03a7/1080.mp4",
            18: "https://lynx.cdn.cinemap.cc/43936b2622682092e30dc8e70dc68d21:2025122616/tvseries/9a952cbcea1689433a4f9ecd80e5dd74cb4260fa/1080.mp4",
            19: "https://lutetium.cdn.cinemap.cc/1c5bbc8040bb5a0fc0ef12fa2c694d8f:2025122616/tvseries/6b221c6f5f0cc389de861cfa388a1e4fe1fdfc1a/1080.mp4",
            20: "https://sierra.cdn.cinemap.cc/d72c486783c48424960bd51656702677:2025122616/tvseries/b22d713e03d1e178de391a97eb241c12fcefc5bf/1080.mp4",
            21: "https://terbium.cdn.cinemap.cc/f53587c2b0fb0727d81153e669a7c5e3:2025122616/tvseries/7aa0bf4cc787bf0b020ae17d3d6cbd3625b3c23e/1080.mp4",
            22: "https://cobra.cdn.cinemap.cc/93d5a227ead9b556ec87e08e6f586d67:2025122616/tvseries/b309c8a27faab8669c7865c977ec142de08180e1/1080.mp4"
        },
        14:{
            1: "https://prism.cdn.cinemap.cc/4f008f52742b4cacab1e0ba31d4d5af8:2025122616/tvseries/f1df84810f4e99917c627c5e260e9092f7566139/1080.mp4",
            2: "https://blitz.cdn.cinemap.cc/210befe94a47367ccb8c7770c7863f21:2025122616/tvseries/b01974555f0d86ba2fd95046509ceb7b6127517f/1080.mp4",
            3: "https://viking.cdn.cinemap.cc/4d87d948c85d6ffd7c657ca1abf3d806:2025122616/tvseries/2ef55e0d96c8cb95d33dec9c422d0c97d712844c/1080.mp4",
            4: "https://francium.cdn.cinemap.cc/7311ea5cf19477f66e836680f0f86023:2025122616/tvseries/af78be016e5bad32d339d7e141ebf9b759a37728/1080.mp4",
            5: "https://ozzy.cdn.cinemap.cc/741d349561b0259838a295345d3a57ff:2025122616/tvseries/db5c855ddc006468bed1b2c4831f1fae2484f0d1/1080.mp4",
            6: "https://iridium.cdn.cinemap.cc/06287f601ce2be1d07e9ddf93631b6dc:2025122616/tvseries/b14165d40f487aabe5e3f0940da91f8bd6dbd090/1080.mp4",
            7: "https://flerovium.cdn.cinemap.cc/20a9c5535cbd0c589cc133753e58eb46:2025122616/tvseries/4429025548d4aa6ec9d7c702b53cc498842a2f7f/1080.mp4",
            8: "https://sagitta.cdn.cinemap.cc/8be04ee7dac993d26226c7dcacc8fb63:2025122616/tvseries/5c1ec0b23529d413ea77a9080f5f379efe8fb160/1080.mp4",
            9: "https://lipsium.cdn.cinemap.cc/231290346774d87d829eaed979759a70:2025122616/tvseries/40d313a33f6c1f32cb347a6cd702bf5f76f82021/1080.mp4",
            10: "https://fenris.cdn.cinemap.cc/a8280013e81928fd55c192c3df9c56b6:2025122616/tvseries/63cbaa457b773a4dc7df16b760390d9eec42bd7f/1080.mp4",
            11: "https://falcon.cdn.cinemap.cc/8cc471402dcf09e88bad81df18cddc74:2025122616/tvseries/0dbe87c5592f9d17e824a1c775d6ce5972dbe5c0/1080.mp4",
            12: "https://badger.cdn.cinemap.cc/f1da8d0ca51392941b8ff3b7a0eb4fbd:2025122616/tvseries/8b316a6cc70b63c3435ad5a71bf60ad4346bdd08/1080.mp4",
            13: "https://ranger.cdn.cinemap.cc/b9b460ec5e6d57ea86c20e2813ac7f00:2025122616/tvseries/06aabfdd38b9199afd8a40cf2531e78d6c3b9c47/1080.mp4",
            14: "https://viking.cdn.cinemap.cc/6924c0ddaf2e9d4f2c1546156c5947dc:2025122616/tvseries/7af2f9edc24bcd095556c05c2e370e21734e411c/1080.mp4",
            15: "https://nexus.cdn.cinemap.cc/8a347127ac864061d333bccd92044a15:2025122616/tvseries/8e7e05f2f1d4c24fdfd00b7dcd46f8eac9cf9550/1080.mp4"
        },
        15:{
            1: "https://nailium.cdn.cinemap.cc/9a77d468378343d7ceb793b74a9857b7:2025122616/tvseries/f6de1e48523748fbce39da415cb646ceef3f1666/1080.mp4",
            2: "https://flash.cdn.cinemap.cc/cb07eb731cb96cb259eedeed02438541:2025122616/tvseries/7b399cedd1c5603d20e20fdf4ddd3712099a19ff/1080.mp4",
            3: "https://vegas.cdn.cinemap.cc/3ffc064be3f49108be8608fd6d3bed07:2025122616/tvseries/0e1cd99e9f4cddaf589d9c4652d2f502b418602b/1080.mp4",
            4: "https://sagitta.cdn.cinemap.cc/2919caf6da10090f191907c659cb974d:2025122616/tvseries/93353a576dc06d93ab67995f8b1a5b7e5a46fbc3/1080.mp4",
            5: "https://baator.cdn.cinemap.cc/982ee2cc209abcee1507075df5240ea8:2025122616/tvseries/4c62dff36d7a1ac7bd3d4e9b1af5b2416955409c/1080.mp4",
            6: "https://grendel.cdn.cinemap.cc/81901ddeab1389a824b06b5da11f9235:2025122616/tvseries/8aa7f73e76c546c863e4bd4ca3f6731f7d046fa3/1080.mp4",
            7: "https://orion.cdn.cinemap.cc/1af9e6c4afc0024925a8173aa97813fe:2025122616/tvseries/dec6d7a8c2f0b0030859a74102e61cae1cc941d4/1080.mp4",
            8: "https://goliath.cdn.cinemap.cc/3edc34fbcd0ed3453cf23eac8431040b:2025122616/tvseries/443f8c2320490baaec7464f62090115d1615a753/1080.mp4",
            9: "https://tornado.cdn.cinemap.cc/c836785c777748d3bdd1d5fd6e52d9bd:2025122616/tvseries/f485c1f89df934b5b0cd3de7e4ed3f11f03fa2c3/1080.mp4",
            10: "https://thallium.cdn.cinemap.cc/3a7dfb1b26c0121538c9cd7728f79daa:2025122616/tvseries/eba78d75bac90af887d339207887b58915cedb7c/1080.mp4"
        }
    }

    function change(){
        const sez=seasons.value;
        const ser=series.value;
        localStorage.setItem('season',sez);
        localStorage.setItem('series',ser);
        const url=links[sez]&&links[sez][ser];
        if(url&&url.trim()){
            videoMessage.hidden=true;
            video.hidden=false;
            video.src=url;
            video.load();
        } else{
            video.pause();
            video.removeAttribute('src');
            video.load();
            video.hidden=true;
            videoMessage.hidden=false;
        }
    };

    video.addEventListener('error',()=>{
        video.hidden=true;
        videoMessage.hidden=false;
    });

    const savedSez=localStorage.getItem('season');
    const savedSer=localStorage.getItem('series');

    seasons.addEventListener('change',()=>{
        const sez=seasons.value;
        const count = seriesData[sez];
        series.innerHTML='';
        for (let i=1;i<=count;i++){
            const option=document.createElement('option');
            option.value=i;
            option.text=i+' серия';
            series.appendChild(option);
        }
        if(savedSer && savedSer<=count){
            series.value=savedSer;
        } else{
            series.value=1;
        }
        change();
    });
    series.addEventListener('change',change);
    if(savedSez){
        seasons.value=savedSez;
    }
    seasons.dispatchEvent(new Event('change'));
});