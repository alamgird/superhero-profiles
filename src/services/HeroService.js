import $ from 'jquery';
import md5 from 'blueimp-md5';

const PUBLIC_KEY = '18f14321e64026f19fcfb1b899600efd';
const PRIVATE_KEY = 'e4901f3c9209cd37f1e4fd8bffe4a795c2d7dc37';

const getHash = (ts) => md5(ts + PRIVATE_KEY + PUBLIC_KEY);
const getUrl = () => 'http://gateway.marvel.com:80/v1/public/characters?' + $.param({
    ts: 1,
    apikey: PUBLIC_KEY,
    hash: getHash(1)
});

class HeroService {

    getHeroes(successCb, errorCb) {
        $.ajax({
            url: getUrl(),
            success: function (response) {
                let heroes = response.data.results.map((hero) => {
                    return {
                        name: hero.name,
                        story: hero.description || 'Not Available',
                        img: hero.thumbnail.path + '.' + hero.thumbnail.extension
                    };
                });

                successCb(heroes);
            },
            error: errorCb
        });
    }
}

export default HeroService;
