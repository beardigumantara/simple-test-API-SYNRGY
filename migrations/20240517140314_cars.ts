import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("price", 10).notNullable();
    table.string("start_date", 20).notNullable();
    table.string("finishDate", 20).notNullable();
    table.boolean("avaliability").notNullable().defaultTo(false);
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}

