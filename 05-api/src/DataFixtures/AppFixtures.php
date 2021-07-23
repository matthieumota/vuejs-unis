<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // J'instancie Faker pour générer de fausses données
        $faker = Factory::create('fr_FR');

        $uploadDirectory = __DIR__.'/../../public/uploads/product';
        if (!is_dir($uploadDirectory)) {
            mkdir($uploadDirectory, 0755, true);
        }

        for ($i = 0; $i < 100; $i++) {
            $product = new Product();
            $product->setName($faker->sentence());
            $product->setImage($faker->image($uploadDirectory, 640, 480, null, false));
            $product->setInStock($faker->numberBetween(0, 10));
            $product->setPrice($faker->numberBetween(100, 1000) * 100);
            $manager->persist($product);
        }

        $manager->flush();
    }
}
