/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ICTを活用した学習戦略とモデルの構築",
    description: "ICTとIoTを活用して学習戦略とモデルを構築する取り組みについての研究。特に、オープンデータに基づくシステム運用の視点からアプローチ。",
    url: "https://www.union-services.com/sst/sst-12.html"
  },
  {
    title: "情報セキュリティとCTF活動",
    description: "情報セキュリティ活動の一環として行われるCTF（Capture The Flag）についての取り組みと成果。特に、セキュリティキャンプでの活動について。",
    url: "https://news.mynavi.jp/itsearch/article/security/3634"
  },
  {
    title: "Raspberry Piを用いたメッシュネットワーク構築",
    description: "Raspberry Piを使用してローカル環境でメッシュネットワークを構築する実験プロジェクト。性能評価とルーティングアルゴリズムの実践。",
    url: "http://www.ieice-taikai.jp/2020general/jpn/p_pro/0212_Bpro.pdf"
  },
  {
    title: "るICT学習デザインの研究",
    description: "GIGAスクール構想に基づくICT学習デザインの研究と実装。個別学習環境の比較とプログラミング教育の実践。",
    url: "https://www.jstage.jst.go.jp/article/digrajprocsummer/2021/0/2021_47/_pdf/-char/ja"
  },
  {
    title: "Microsoft Student Ambassadorsの活動",
    description: "Microsoft Student Ambassadorsとして日本での技術コミュニティの企画と運営について。教育分野でのICT活用の実践例。",
    url: "https://techcommunity.microsoft.com/t5/microsoft-mvp-communities-blog/what-students-learned-from-collaborating-with-mvp/ba-p/3913422"
  },
  {
    title: "プログラミング教育におけるAIの活用",
    description: "初学者向けにAIを活用したプログラミング教育の運営と支援方法についての研究。実際の取り組みとその効果について。",
    url: "https://www.jset.gr.jp/taikai43/program.html"
  },
  {
    title: "技術人材の育成における情報セキュリティ学習環境の構築",
    description: "情報セキュリティ学習環境の構築とその運用についての提案。ログの活用方法も含む。",
    url: "https://ipsj.ixsq.nii.ac.jp/ej/?action=repository_uri&item_id=230556&file_id=1&file_no=1"
  },
  {
    title: "地域コミュニティとICT人材育成の実践",
    description: "地域コミュニティとの連携に向けたICT人材育成のための学習体制の構築と実践についての研究。",
    url: "https://doi.org/10.15077/jsetstudy.2022.4_61"
  },
  {
    title: "VTuberを活用したオンライン学習支援",
    description: "VTuberを活用して情報セキュリティ学習をオンラインで支援するための環境構築と実践について。",
    url: "http://digrajapan.org/conf12th"
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
