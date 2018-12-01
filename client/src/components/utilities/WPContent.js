import React from "react";
import styled from "styled-components";

const WPContent = props => <WPContentStyles>{props.children}</WPContentStyles>;

const WPContentStyles = styled.div`
  > .content-block > * {
    padding-left: 3%;
    padding-right: 3%;
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
  }

  > .content-block > *.alignwide {
    max-width: 820px;
  }

  > .content-block > *.alignfull {
    max-width: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .wp-block-button {
    margin-bottom: 1.5em;
  }

  .wp-block-button .wp-block-button__link {
    border: none;
    border-radius: 23px;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
    padding: 11px 24px;
    text-align: center;
    text-decoration: none;
    white-space: normal;
    word-break: break-all;
  }

  .wp-block-button.is-style-squared .wp-block-button__link {
    border-radius: 0;
  }

  .wp-block-button.aligncenter {
    text-align: center;
  }

  .wp-block-button.alignright {
    text-align: right;
  }

  .wp-block-button__link:not(.has-background),
  .wp-block-button__link:not(.has-background):active,
  .wp-block-button__link:not(.has-background):focus,
  .wp-block-button__link:not(.has-background):hover {
    background-color: #32373c;
  }

  .wp-block-button.is-style-outline .wp-block-button__link {
    background: transparent;
    border: 2px solid currentcolor;
  }

  .wp-block-button.is-style-outline .wp-block-button__link:active,
  .wp-block-button.is-style-outline .wp-block-button__link:focus,
  .wp-block-button.is-style-outline .wp-block-button__link:hover {
    border-color: currentcolor;
  }

  .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color),
  .wp-block-button.is-style-outline
    .wp-block-button__link:not(.has-text-color):active,
  .wp-block-button.is-style-outline
    .wp-block-button__link:not(.has-text-color):focus,
  .wp-block-button.is-style-outline
    .wp-block-button__link:not(.has-text-color):hover {
    color: #32373c;
  }

  .wp-block-button__link:not(.has-text-color),
  .wp-block-button__link:not(.has-text-color):active,
  .wp-block-button__link:not(.has-text-color):focus,
  .wp-block-button__link:not(.has-text-color):hover {
    color: #fff;
  }

  .wp-block-categories.alignleft {
    margin-right: 2em;
  }

  .wp-block-categories.alignright {
    margin-left: 2em;
  }

  .wp-block-columns {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 782px) {
    .wp-block-columns {
      flex-wrap: nowrap;
    }
  }

  .wp-block-column {
    flex: 1;
    flex-basis: 100%;
    margin-bottom: 1em;
  }

  @media (min-width: 600px) {
    .wp-block-column {
      flex-basis: 50%;
      flex-grow: 0;
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  @media (min-width: 600px) {
    .wp-block-column:nth-child(odd) {
      padding-left: 0;
    }

    .wp-block-column:nth-child(2n) {
      padding-right: 0;
    }
  }

  @media (min-width: 782px) {
    .wp-block-column:not(:first-child) {
      padding-left: 16px;
    }

    .wp-block-column:not(:last-child) {
      padding-right: 16px;
    }
  }

  .wp-block-cover,
  .wp-block-cover-image {
    align-items: center;
    background-color: #000;
    background-position: 50%;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin: 0 0 1.5em;
    min-height: 430px;
    position: relative;
    width: 100%;
    max-width: 100%;
  }

  .wp-block-cover-image.has-left-content,
  .wp-block-cover.has-left-content {
    justify-content: flex-start;
  }

  .wp-block-cover-image.has-left-content .wp-block-cover-image-text,
  .wp-block-cover-image.has-left-content .wp-block-cover-text,
  .wp-block-cover-image.has-left-content h2,
  .wp-block-cover.has-left-content .wp-block-cover-image-text,
  .wp-block-cover.has-left-content .wp-block-cover-text,
  .wp-block-cover.has-left-content h2 {
    margin-left: 0;
    text-align: left;
  }

  .wp-block-cover-image.has-right-content,
  .wp-block-cover.has-right-content {
    justify-content: flex-end;
  }

  .wp-block-cover-image.has-right-content .wp-block-cover-image-text,
  .wp-block-cover-image.has-right-content .wp-block-cover-text,
  .wp-block-cover-image.has-right-content h2,
  .wp-block-cover.has-right-content .wp-block-cover-image-text,
  .wp-block-cover.has-right-content .wp-block-cover-text,
  .wp-block-cover.has-right-content h2 {
    margin-right: 0;
    text-align: right;
  }

  .wp-block-cover-image .wp-block-cover-image-text,
  .wp-block-cover-image .wp-block-cover-text,
  .wp-block-cover-image h2,
  .wp-block-cover .wp-block-cover-image-text,
  .wp-block-cover .wp-block-cover-text,
  .wp-block-cover h2 {
    color: #fff;
    font-size: 2em;
    line-height: 1.25;
    margin-bottom: 0;
    max-width: 610px;
    padding: 14px;
    text-align: center;
    z-index: 1;
  }

  .wp-block-cover-image .wp-block-cover-image-text a,
  .wp-block-cover-image .wp-block-cover-image-text a:active,
  .wp-block-cover-image .wp-block-cover-image-text a:focus,
  .wp-block-cover-image .wp-block-cover-image-text a:hover,
  .wp-block-cover-image .wp-block-cover-text a,
  .wp-block-cover-image .wp-block-cover-text a:active,
  .wp-block-cover-image .wp-block-cover-text a:focus,
  .wp-block-cover-image .wp-block-cover-text a:hover,
  .wp-block-cover-image h2 a,
  .wp-block-cover-image h2 a:active,
  .wp-block-cover-image h2 a:focus,
  .wp-block-cover-image h2 a:hover,
  .wp-block-cover .wp-block-cover-image-text a,
  .wp-block-cover .wp-block-cover-image-text a:active,
  .wp-block-cover .wp-block-cover-image-text a:focus,
  .wp-block-cover .wp-block-cover-image-text a:hover,
  .wp-block-cover .wp-block-cover-text a,
  .wp-block-cover .wp-block-cover-text a:active,
  .wp-block-cover .wp-block-cover-text a:focus,
  .wp-block-cover .wp-block-cover-text a:hover,
  .wp-block-cover h2 a,
  .wp-block-cover h2 a:active,
  .wp-block-cover h2 a:focus,
  .wp-block-cover h2 a:hover {
    color: #fff;
  }

  .wp-block-cover-image.has-parallax,
  .wp-block-cover.has-parallax {
    background-attachment: fixed;
  }

  .wp-block-cover-image.has-background-dim:before,
  .wp-block-cover.has-background-dim:before {
    background-color: inherit;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.5;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-10:before,
  .wp-block-cover.has-background-dim.has-background-dim-10:before {
    opacity: 0.1;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-20:before,
  .wp-block-cover.has-background-dim.has-background-dim-20:before {
    opacity: 0.2;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-30:before,
  .wp-block-cover.has-background-dim.has-background-dim-30:before {
    opacity: 0.3;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-40:before,
  .wp-block-cover.has-background-dim.has-background-dim-40:before {
    opacity: 0.4;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-50:before,
  .wp-block-cover.has-background-dim.has-background-dim-50:before {
    opacity: 0.5;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-60:before,
  .wp-block-cover.has-background-dim.has-background-dim-60:before {
    opacity: 0.6;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-70:before,
  .wp-block-cover.has-background-dim.has-background-dim-70:before {
    opacity: 0.7;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-80:before,
  .wp-block-cover.has-background-dim.has-background-dim-80:before {
    opacity: 0.8;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-90:before,
  .wp-block-cover.has-background-dim.has-background-dim-90:before {
    opacity: 0.9;
  }

  .wp-block-cover-image.has-background-dim.has-background-dim-100:before,
  .wp-block-cover.has-background-dim.has-background-dim-100:before {
    opacity: 1;
  }

  .wp-block-cover-image.components-placeholder,
  .wp-block-cover.components-placeholder {
    height: inherit;
  }

  .wp-block-cover-image.alignleft,
  .wp-block-cover-image.alignright,
  .wp-block-cover.alignleft,
  .wp-block-cover.alignright,
  [data-align="left"] .wp-block-cover,
  [data-align="left"] .wp-block-cover-image,
  [data-align="right"] .wp-block-cover,
  [data-align="right"] .wp-block-cover-image {
    max-width: 305px;
    width: 100%;
  }

  .wp-block-cover__video-background {
    -o-object-fit: fill;
    height: 100%;
    left: 50%;
    object-fit: fill;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    z-index: 0;
  }

  .editor-block-list__block[data-type="core/embed"][data-align="left"]
    .editor-block-list__block-edit,
  .editor-block-list__block[data-type="core/embed"][data-align="right"]
    .editor-block-list__block-edit,
  .wp-block-embed.alignleft,
  .wp-block-embed.alignright {
    max-width: 360px;
    width: 100%;
  }

  .wp-block-embed {
    margin-bottom: 1em;
  }

  .wp-block-embed figcaption {
    color: #555d66;
    font-size: 13px;
    margin-bottom: 1em;
    margin-top: 0.5em;
    text-align: center;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-1
    .wp-block-embed__wrapper,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-2
    .wp-block-embed__wrapper,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-4-3
    .wp-block-embed__wrapper,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-9-16
    .wp-block-embed__wrapper,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-16-9
    .wp-block-embed__wrapper,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-18-9
    .wp-block-embed__wrapper,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-21-9
    .wp-block-embed__wrapper {
    position: relative;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-1
    .wp-block-embed__wrapper:before,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-2
    .wp-block-embed__wrapper:before,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-4-3
    .wp-block-embed__wrapper:before,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-9-16
    .wp-block-embed__wrapper:before,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-16-9
    .wp-block-embed__wrapper:before,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-18-9
    .wp-block-embed__wrapper:before,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-21-9
    .wp-block-embed__wrapper:before {
    content: "";
    display: block;
    padding-top: 50%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-1
    .wp-block-embed__wrapper
    iframe,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-2
    .wp-block-embed__wrapper
    iframe,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-4-3
    .wp-block-embed__wrapper
    iframe,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-9-16
    .wp-block-embed__wrapper
    iframe,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-16-9
    .wp-block-embed__wrapper
    iframe,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-18-9
    .wp-block-embed__wrapper
    iframe,
  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-21-9
    .wp-block-embed__wrapper
    iframe {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-21-9
    .wp-block-embed__wrapper:before {
    padding-top: 42.85%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-18-9
    .wp-block-embed__wrapper:before {
    padding-top: 50%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-16-9
    .wp-block-embed__wrapper:before {
    padding-top: 56.25%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-4-3
    .wp-block-embed__wrapper:before {
    padding-top: 75%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-1
    .wp-block-embed__wrapper:before {
    padding-top: 100%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-9-6
    .wp-block-embed__wrapper:before {
    padding-top: 66.66%;
  }

  .wp-embed-responsive
    .wp-block-embed.wp-embed-aspect-1-2
    .wp-block-embed__wrapper:before {
    padding-top: 200%;
  }

  .wp-block-file {
    margin-bottom: 1.5em;
  }

  .wp-block-file.aligncenter {
    text-align: center;
  }

  .wp-block-file.alignright {
    text-align: right;
  }

  .wp-block-file .wp-block-file__button {
    background: #32373c;
    border-radius: 2em;
    color: #fff;
    font-size: 13px;
    padding: 0.5em 1em;
  }

  .wp-block-file a.wp-block-file__button {
    text-decoration: none;
  }

  .wp-block-file a.wp-block-file__button:active,
  .wp-block-file a.wp-block-file__button:focus,
  .wp-block-file a.wp-block-file__button:hover,
  .wp-block-file a.wp-block-file__button:visited {
    box-shadow: none;
    color: #fff;
    opacity: 0.85;
    text-decoration: none;
  }

  .wp-block-file * + .wp-block-file__button {
    margin-left: 0.75em;
  }

  .wp-block-gallery {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  .wp-block-gallery .blocks-gallery-image,
  .wp-block-gallery .blocks-gallery-item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin: 0 16px 16px 0;
    position: relative;
  }

  .wp-block-gallery .blocks-gallery-image figure,
  .wp-block-gallery .blocks-gallery-item figure {
    height: 100%;
    margin: 0;
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .wp-block-gallery .blocks-gallery-image figure,
    .wp-block-gallery .blocks-gallery-item figure {
      align-items: flex-end;
      display: flex;
      justify-content: flex-start;
    }
  }

  .wp-block-gallery .blocks-gallery-image img,
  .wp-block-gallery .blocks-gallery-item img {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .wp-block-gallery .blocks-gallery-image img,
    .wp-block-gallery .blocks-gallery-item img {
      width: auto;
    }
  }

  .wp-block-gallery .blocks-gallery-image figcaption,
  .wp-block-gallery .blocks-gallery-item figcaption {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3) 60%,
      transparent
    );
    bottom: 0;
    color: #fff;
    font-size: 13px;
    max-height: 100%;
    overflow: auto;
    padding: 40px 10px 5px;
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .wp-block-gallery .blocks-gallery-image figcaption img,
  .wp-block-gallery .blocks-gallery-item figcaption img {
    display: inline;
  }

  .wp-block-gallery.is-cropped .blocks-gallery-image a,
  .wp-block-gallery.is-cropped .blocks-gallery-image img,
  .wp-block-gallery.is-cropped .blocks-gallery-item a,
  .wp-block-gallery.is-cropped .blocks-gallery-item img {
    width: 100%;
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .wp-block-gallery.is-cropped .blocks-gallery-image a,
    .wp-block-gallery.is-cropped .blocks-gallery-image img,
    .wp-block-gallery.is-cropped .blocks-gallery-item a,
    .wp-block-gallery.is-cropped .blocks-gallery-item img {
      -o-object-fit: cover;
      flex: 1;
      height: 100%;
      object-fit: cover;
    }
  }

  .wp-block-gallery .blocks-gallery-image,
  .wp-block-gallery .blocks-gallery-item {
    width: calc(50% - 8px);
  }

  .wp-block-gallery .blocks-gallery-image:nth-of-type(2n),
  .wp-block-gallery .blocks-gallery-item:nth-of-type(2n) {
    margin-right: 0;
  }

  .wp-block-gallery.columns-1 .blocks-gallery-image,
  .wp-block-gallery.columns-1 .blocks-gallery-item {
    margin-right: 0;
    width: 100%;
  }

  @media (min-width: 600px) {
    .wp-block-gallery.columns-3 .blocks-gallery-image,
    .wp-block-gallery.columns-3 .blocks-gallery-item {
      margin-right: 16px;
      width: calc(33.33333% - 10.66667px);
    }

    .wp-block-gallery.columns-4 .blocks-gallery-image,
    .wp-block-gallery.columns-4 .blocks-gallery-item {
      margin-right: 16px;
      width: calc(25% - 12px);
    }

    .wp-block-gallery.columns-5 .blocks-gallery-image,
    .wp-block-gallery.columns-5 .blocks-gallery-item {
      margin-right: 16px;
      width: calc(20% - 12.8px);
    }

    .wp-block-gallery.columns-6 .blocks-gallery-image,
    .wp-block-gallery.columns-6 .blocks-gallery-item {
      margin-right: 16px;
      width: calc(16.66667% - 13.33333px);
    }

    .wp-block-gallery.columns-7 .blocks-gallery-image,
    .wp-block-gallery.columns-7 .blocks-gallery-item {
      margin-right: 16px;
      width: calc(14.28571% - 13.71429px);
    }

    .wp-block-gallery.columns-8 .blocks-gallery-image,
    .wp-block-gallery.columns-8 .blocks-gallery-item {
      margin-right: 16px;
      width: calc(12.5% - 14px);
    }

    .wp-block-gallery.columns-1 .blocks-gallery-image:nth-of-type(1n),
    .wp-block-gallery.columns-1 .blocks-gallery-item:nth-of-type(1n),
    .wp-block-gallery.columns-2 .blocks-gallery-image:nth-of-type(2n),
    .wp-block-gallery.columns-2 .blocks-gallery-item:nth-of-type(2n),
    .wp-block-gallery.columns-3 .blocks-gallery-image:nth-of-type(3n),
    .wp-block-gallery.columns-3 .blocks-gallery-item:nth-of-type(3n),
    .wp-block-gallery.columns-4 .blocks-gallery-image:nth-of-type(4n),
    .wp-block-gallery.columns-4 .blocks-gallery-item:nth-of-type(4n),
    .wp-block-gallery.columns-5 .blocks-gallery-image:nth-of-type(5n),
    .wp-block-gallery.columns-5 .blocks-gallery-item:nth-of-type(5n),
    .wp-block-gallery.columns-6 .blocks-gallery-image:nth-of-type(6n),
    .wp-block-gallery.columns-6 .blocks-gallery-item:nth-of-type(6n),
    .wp-block-gallery.columns-7 .blocks-gallery-image:nth-of-type(7n),
    .wp-block-gallery.columns-7 .blocks-gallery-item:nth-of-type(7n),
    .wp-block-gallery.columns-8 .blocks-gallery-image:nth-of-type(8n),
    .wp-block-gallery.columns-8 .blocks-gallery-item:nth-of-type(8n) {
      margin-right: 0;
    }
  }

  .is-selected .wp-block-gallery .blocks-gallery-image:nth-last-child(2),
  .is-selected .wp-block-gallery .blocks-gallery-item:nth-last-child(2),
  .is-typing .wp-block-gallery .blocks-gallery-image:nth-last-child(2),
  .is-typing .wp-block-gallery .blocks-gallery-item:nth-last-child(2),
  .wp-block-gallery .blocks-gallery-image:last-child,
  .wp-block-gallery .blocks-gallery-item:last-child {
    margin-right: 0;
  }

  .wp-block-gallery .blocks-gallery-item.has-add-item-button {
    width: 100%;
  }

  .wp-block-gallery.alignleft,
  .wp-block-gallery.alignright {
    max-width: 305px;
    width: 100%;
  }

  .wp-block-gallery.aligncenter,
  .wp-block-gallery.alignleft,
  .wp-block-gallery.alignright {
    display: flex;
  }

  .wp-block-gallery.aligncenter .blocks-gallery-item figure {
    justify-content: center;
  }

  .wp-block-image {
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }

  .wp-block-image img {
    max-width: 100%;
  }

  .wp-block-image.aligncenter {
    text-align: center;
  }

  .wp-block-image.alignfull img,
  .wp-block-image.alignwide img {
    width: 100%;
  }

  .wp-block-image .aligncenter,
  .wp-block-image .alignleft,
  .wp-block-image .alignright,
  .wp-block-image.is-resized {
    display: table;
    margin-left: 0;
    margin-right: 0;
  }

  .wp-block-image .aligncenter > figcaption,
  .wp-block-image .alignleft > figcaption,
  .wp-block-image .alignright > figcaption,
  .wp-block-image.is-resized > figcaption {
    caption-side: bottom;
    display: table-caption;
  }

  .wp-block-image .alignleft {
    float: left;
    margin-right: 1em;
  }

  .wp-block-image .alignright {
    float: right;
    margin-left: 1em;
  }

  .wp-block-image .aligncenter {
    margin-left: auto;
    margin-right: auto;
  }

  .wp-block-image figcaption {
    color: #555d66;
    font-size: 13px;
    margin-bottom: 1em;
    margin-top: 0.5em;
    text-align: center;
  }

  .wp-block-latest-comments__comment {
    font-size: 15px;
    line-height: 1.1;
    list-style: none;
    margin-bottom: 1em;
  }

  .has-avatars .wp-block-latest-comments__comment {
    list-style: none;
    min-height: 36px;
  }

  .has-avatars
    .wp-block-latest-comments__comment
    .wp-block-latest-comments__comment-excerpt,
  .has-avatars
    .wp-block-latest-comments__comment
    .wp-block-latest-comments__comment-meta {
    margin-left: 52px;
  }

  .has-dates .wp-block-latest-comments__comment,
  .has-excerpts .wp-block-latest-comments__comment {
    line-height: 1.5;
  }

  .wp-block-latest-comments__comment-excerpt p {
    font-size: 14px;
    line-height: 1.8;
    margin: 5px 0 20px;
  }

  .wp-block-latest-comments__comment-date {
    color: #8f98a1;
    display: block;
    font-size: 12px;
  }

  .wp-block-latest-comments .avatar,
  .wp-block-latest-comments__comment-avatar {
    border-radius: 24px;
    display: block;
    float: left;
    height: 40px;
    margin-right: 12px;
    width: 40px;
  }

  .wp-block-latest-posts.alignleft {
    margin-right: 2em;
  }

  .wp-block-latest-posts.alignright {
    margin-left: 2em;
  }

  .wp-block-latest-posts.is-grid {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }

  .wp-block-latest-posts.is-grid li {
    margin: 0 16px 16px 0;
    width: 100%;
  }

  @media (min-width: 600px) {
    .wp-block-latest-posts.columns-2 li {
      width: calc(50% - 16px);
    }

    .wp-block-latest-posts.columns-3 li {
      width: calc(33.33333% - 16px);
    }

    .wp-block-latest-posts.columns-4 li {
      width: calc(25% - 16px);
    }

    .wp-block-latest-posts.columns-5 li {
      width: calc(20% - 16px);
    }

    .wp-block-latest-posts.columns-6 li {
      width: calc(16.66667% - 16px);
    }
  }

  .wp-block-latest-posts__post-date {
    color: #6c7781;
    display: block;
    font-size: 13px;
  }

  .wp-block-media-text,
  .wp-block-media-text.aligncenter {
    display: grid;
  }

  .wp-block-media-text {
    align-items: center;
    grid-template-areas: "media-text-media media-text-content";
    grid-template-columns: 50% auto;
    grid-template-rows: auto;
  }

  .wp-block-media-text .has-media-on-the-right {
    grid-template-columns: auto 50%;
  }

  .wp-block-media-text .wp-block-media-text__media {
    grid-area: media-text-media;
    margin: 0;
  }

  .wp-block-media-text .wp-block-media-text__content {
    grid-area: media-text-content;
    padding: 0 8%;
    word-break: break-word;
  }

  .wp-block-media-text.has-media-on-the-right {
    grid-template-areas: "media-text-content media-text-media";
  }

  .wp-block-media-text > figure > img,
  .wp-block-media-text > figure > video {
    max-width: unset;
    vertical-align: middle;
    width: 100%;
  }

  p.is-small-text {
    font-size: 14px;
  }

  p.is-regular-text {
    font-size: 16px;
  }

  p.is-large-text {
    font-size: 36px;
  }

  p.is-larger-text {
    font-size: 48px;
  }

  p.has-drop-cap:not(:focus):first-letter {
    float: left;
    font-size: 8.4em;
    font-style: normal;
    font-weight: 100;
    line-height: 0.68;
    margin: 0.05em 0.1em 0 0;
    text-transform: uppercase;
  }

  p.has-background {
    padding: 20px 30px;
  }

  p.has-text-color a {
    color: inherit;
  }

  .wp-block-pullquote {
    margin-left: 0;
    margin-right: 0;
    padding: 3em 0;
    text-align: center;
  }

  .wp-block-pullquote.alignleft,
  .wp-block-pullquote.alignright {
    max-width: 305px;
  }

  .wp-block-pullquote.alignleft p,
  .wp-block-pullquote.alignright p {
    font-size: 20px;
  }

  .wp-block-pullquote p {
    font-size: 28px;
    line-height: 1.6;
  }

  .wp-block-pullquote cite,
  .wp-block-pullquote footer {
    position: relative;
  }

  .wp-block-pullquote .has-text-color a {
    color: inherit;
  }

  .wp-block-pullquote:not(.is-style-solid-color) {
    background: none;
  }

  .wp-block-pullquote.is-style-solid-color {
    border: none;
  }

  .wp-block-pullquote.is-style-solid-color blockquote {
    margin-left: auto;
    margin-right: auto;
    max-width: 60%;
    text-align: left;
  }

  .wp-block-pullquote.is-style-solid-color blockquote p {
    font-size: 32px;
    margin-bottom: 0;
    margin-top: 0;
  }

  .wp-block-pullquote.is-style-solid-color blockquote cite {
    font-style: normal;
    text-transform: none;
  }

  .wp-block-pullquote cite {
    color: inherit;
  }

  .wp-block-quote.is-large,
  .wp-block-quote.is-style-large {
    margin: 0 0 16px;
    padding: 0 1em;
  }

  .wp-block-quote.is-large p,
  .wp-block-quote.is-style-large p {
    font-size: 24px;
    font-style: italic;
    line-height: 1.6;
  }

  .wp-block-quote.is-large cite,
  .wp-block-quote.is-large footer,
  .wp-block-quote.is-style-large cite,
  .wp-block-quote.is-style-large footer {
    font-size: 18px;
    text-align: right;
  }

  .wp-block-separator.is-style-wide {
    border-bottom-width: 1px;
  }

  .wp-block-separator.is-style-dots {
    background: none;
    border: none;
    height: auto;
    line-height: 1;
    max-width: none;
    text-align: center;
  }

  .wp-block-separator.is-style-dots:before {
    color: #191e23;
    content: "\00b7 \00b7 \00b7";
    font-family: serif;
    font-size: 20px;
    letter-spacing: 2em;
    padding-left: 2em;
  }

  p.wp-block-subhead {
    font-size: 1.1em;
    font-style: italic;
    opacity: 0.75;
  }

  .wp-block-table.has-fixed-layout {
    table-layout: fixed;
    width: 100%;
  }

  .wp-block-table.aligncenter,
  .wp-block-table.alignleft,
  .wp-block-table.alignright {
    display: table;
    width: auto;
  }

  .wp-block-table.is-style-stripes {
    border-bottom: 1px solid #f3f4f5;
    border-collapse: inherit;
    border-spacing: 0;
  }

  .wp-block-table.is-style-stripes tr:nth-child(odd) {
    background-color: #f3f4f5;
  }

  .wp-block-table.is-style-stripes td {
    border-color: transparent;
  }

  .wp-block-text-columns,
  .wp-block-text-columns.aligncenter {
    display: flex;
  }

  .wp-block-text-columns .wp-block-column {
    margin: 0 16px;
    padding: 0;
  }

  .wp-block-text-columns .wp-block-column:first-child {
    margin-left: 0;
  }

  .wp-block-text-columns .wp-block-column:last-child {
    margin-right: 0;
  }

  .wp-block-text-columns.columns-2 .wp-block-column {
    width: 50%;
  }

  .wp-block-text-columns.columns-3 .wp-block-column {
    width: 33.33333%;
  }

  .wp-block-text-columns.columns-4 .wp-block-column {
    width: 25%;
  }

  pre.wp-block-verse {
    overflow: auto;
    white-space: nowrap;
  }

  .wp-block-video {
    margin-left: 0;
    margin-right: 0;
  }

  .wp-block-video video {
    max-width: 100%;
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .wp-block-video [poster] {
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  .wp-block-video.aligncenter {
    text-align: center;
  }

  .wp-block-video figcaption {
    color: #555d66;
    font-size: 13px;
    margin-bottom: 1em;
    margin-top: 0.5em;
    text-align: center;
  }
`;

export default WPContent;
