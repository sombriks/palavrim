exports.up = function (knex) {
  return knex.raw(`
    create view recent_games as 
    select g.uid, g.word, count(r1.id) as guesses 
    from game g 
    left join result r1 ON r1.game_id = g.id  
    group by g.uid, g.word
    order by g.created_at desc
    limit 100
  `);
};

exports.down = function (knex) {
  return knex.raw("drop view recent_games");
};
