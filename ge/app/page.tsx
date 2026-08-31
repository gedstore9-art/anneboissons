'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { INITIAL_PRODUCTS, CATEGORIES } from '@/lib/catalog';
import { useStore } from '@/store/useStore';

export default function HomePage() {
  const addToCart = useStore((s) => s.addToCart);
  const [activeCategory, setActiveCategory] = useState('Tous nos produits');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  const displayedProducts = activeCategory === 'Tous nos produits'
    ? INITIAL_PRODUCTS
    : INITIAL_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-20 pb-20 overflow-hidden bg-black text-zinc-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black px-4 py-16">
        {/* Motif de fond royal subtil */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
        
        {/* Halo lumineux doré */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 font-bold text-xs uppercase tracking-widest backdrop-blur-md">
            <span>👑</span>
            <span>Distributeur N°1 de Boissons • Cotonou, Bénin</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-400 to-amber-600 leading-[1.15]">
            L'Excellence des Boissons <br className="hidden sm:inline" />
            en Détail & en Gros
          </h1>

          <p className="text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Whiskys de prestige, Champagnes, Rhums fins, Vins d'exception et Bières fraîches. Commandez en ligne en quelques clics et <strong className="text-amber-400 font-semibold">payez uniquement à la livraison</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/boutique"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-700 text-black font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] transition transform hover:-translate-y-0.5"
            >
              Commander en Ligne
            </Link>
            <a
              href="https://wa.me/22901970000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 border border-zinc-700 hover:border-amber-500/80 text-zinc-200 hover:text-white font-bold uppercase tracking-wider text-xs rounded-xl transition backdrop-blur-md"
            >
              Tarifs Grossistes & Devis WhatsApp
            </a>
          </div>

          {/* Micro-arguments rapides */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> 100% Produits Authentiques
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> Livraison Express Cotonou & Calavi
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> Tarifs Dégressifs Événements
            </span>
          </div>
        </div>
      </section>

      {/* 2. AVANTAGES EXCLUSIFS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-500/40 transition space-y-3 relative overflow-hidden group">
            <div className="text-4xl mb-2">📦</div>
            <h3 className="text-lg font-bold text-amber-400 font-serif">Vente au Détail & en Gros</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Que vous commandiez 1 bouteille pour votre soirée ou 50 casiers pour votre maquis ou mariage, le tarif grossiste s'applique automatiquement dès le palier atteint.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-500/40 transition space-y-3 relative overflow-hidden group">
            <div className="text-4xl mb-2">💵</div>
            <h3 className="text-lg font-bold text-amber-400 font-serif">Paiement à la Réception</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Commandez en toute tranquillité sans carte bancaire : vous ne réglez vos boissons (en espèces ou Mobile Money) qu'une fois votre colis vérifié à votre porte.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-500/40 transition space-y-3 relative overflow-hidden group">
            <div className="text-4xl mb-2">🚚</div>
            <h3 className="text-lg font-bold text-amber-400 font-serif">Livraison Locale & Expédition Bénin</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Service express de coursier sur <strong>Cotonou, Calavi et Porto-Novo</strong>, et expédition sécurisée vers <strong>Parakou, Bohicon, Natitingou</strong> et tout le Bénin.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VITRINE PRODUITS AVEC FILTRES RAPIDES */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">Sélection Royale</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">Nos Boissons Populaires</h2>
          </div>
          <Link
            href="/boutique"
            className="text-amber-400 text-sm hover:underline font-semibold flex items-center gap-1"
          >
            Consulter tout le catalogue (7 catégories) →
          </Link>
        </div>

        {/* Barre des Catégories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap uppercase tracking-wider transition ${
                activeCategory === cat
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.slice(0, 6).map((prod) => (
            <div
              key={prod.id}
              className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-500/50 transition duration-300"
            >
              {/* Image & Catégorie */}
              <Link href={`/produit/${prod.slug}`} className="h-64 overflow-hidden relative block bg-black">
                <img
                  src={prod.image_url}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-amber-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-amber-500/30">
                  {prod.category}
                </span>
              </Link>

              {/* Contenu */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <Link href={`/produit/${prod.slug}`}>
                    <h3 className="text-lg font-bold text-white hover:text-amber-400 transition line-clamp-1">
                      {prod.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                  {/* Tarifs */}
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-zinc-400">Prix détail :</span>
                    <span className="text-lg font-mono font-bold text-amber-400">
                      {prod.price_retail.toLocaleString('fr-FR')} FCFA
                    </span>
                  </div>

                  {prod.price_wholesale && (
                    <div className="flex justify-between items-center text-xs bg-amber-950/40 border border-amber-500/30 px-3 py-2 rounded-lg">
                      <span className="text-amber-300">
                        Tarif Gros (dès {prod.wholesale_min_qty} u) :
                      </span>
                      <span className="font-mono font-bold text-amber-300">
                        {prod.price_wholesale.toLocaleString('fr-FR')} FCFA
                      </span>
                    </div>
                  )}

                  {/* Bouton d'action */}
                  <button
                    onClick={() => handleAddToCart(prod)}
                    className={`w-full py-3 font-bold uppercase text-xs tracking-wider rounded-xl transition flex items-center justify-center gap-2 ${
                      addedProductId === prod.id
                        ? 'bg-emerald-500 text-black'
                        : 'bg-amber-500 hover:bg-amber-400 text-black shadow-md'
                    }`}
                  >
                    {addedProductId === prod.id ? (
                      <>
                        <span>✓</span>
                        <span>Ajouté au panier !</span>
                      </>
                    ) : (
                      <>
                        <span>🛒</span>
                        <span>Ajouter au Panier</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BANNIÈRE ÉVÉNEMENTS & GROSSISTES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-amber-950/80 via-zinc-900 to-black p-8 sm:p-12">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest rounded-md">
              Offre Spéciale Événements & Cérémonies
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Vous organisez un Mariage, un Anniversaire ou approvisionnez un Bar ?
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Bénéficiez de remises exclusives sur les volumes, d'une mise en consigne facilitée et d'une livraison directe sur le lieu de votre événement à Cotonou et ses environs.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/22901970000?text=Bonjour,%20je%20souhaite%20un%20devis%20de%20gros%20pour%20un%20événement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase text-xs tracking-wider rounded-xl transition shadow-lg"
              >
                <span>💬</span>
                <span>Demander un devis grossiste sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMENT ÇA MARCHE (3 ÉTAPES FACILES) */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">Simplicité & Rapidité</span>
          <h2 className="text-3xl font-serif font-bold text-white">Comment Commander chez Anne Boissons Royale ?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500 text-black font-black text-lg flex items-center justify-center">
              1
            </div>
            <h3 className="text-base font-bold text-white font-serif">Composez votre Panier</h3>
            <p className="text-xs text-zinc-400">
              Choisissez vos whiskys, vins, champagnes ou bières. Le tarif grossiste s'applique dès la quantité minimale.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500 text-black font-black text-lg flex items-center justify-center">
              2
            </div>
            <h3 className="text-base font-bold text-white font-serif">Renseignez votre Adresse</h3>
            <p className="text-xs text-zinc-400">
              Indiquez votre quartier à Cotonou, Calavi, Porto-Novo ou votre ville en région. Les frais sont calculés automatiquement.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500 text-black font-black text-lg flex items-center justify-center">
              3
            </div>
            <h3 className="text-base font-bold text-white font-serif">Payez à la Livraison</h3>
            <p className="text-xs text-zinc-400">
              Réceptionnez vos boissons fraîches et effectuez votre règlement en espèces ou par Mobile Money auprès du livreur.
            </p>
          </div>
        </div>
      </section>

      {/* 6. AVIS CLIENTS & PREUVE SOCIALE */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
