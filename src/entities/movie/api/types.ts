export interface RawMovieListItemDto {
  ok: boolean;
  error_code: number;
  description: RawMovieListItem[]
}

export interface RawMovieListItem {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER'?: string;
  photo_width?: number;
  photo_height?: number;
}

export interface RawMovie {
  short: Short;
  imdbId: string;
  top: Top;
  main: Main;
}

interface Main {
  id: string;
  wins: ExternalLinks;
  nominationsExcludeWins: ExternalLinks;
  prestigiousAwardSummary: PrestigiousAwardSummary;
  ratingsSummary: RatingsSummary2;
  episodes: null;
  videos: ExternalLinks;
  videoStrip: VideoStrip;
  titleMainImages: TitleMainImages;
  productionStatus: ProductionStatus;
  primaryImage: PrimaryImage;
  inIframeAddLink: PlotContributionLink;
  notInIframeAddLink: PlotContributionLink;
  titleType: TitleType2;
  cast: Cast;
  creators: unknown[];
  directors: Director[];
  writers: Director[];
  titleText: Node;
  originalTitleText: Node;
  canRate: CanRate;
  reviews: ExternalLinks;
  aggregateRatingsBreakdown: AggregateRatingsBreakdown;
  featuredReviews: FeaturedReviews2;
  reviewSummary: ReviewSummary;
  isAdult: boolean;
  moreLikeThisTitles: MoreLikeThisTitles;
  triviaTotal: ExternalLinks;
  trivia: Trivia;
  goofsTotal: ExternalLinks;
  goofs: Goofs;
  quotesTotal: ExternalLinks;
  quotes: Quotes;
  crazyCredits: Goofs;
  alternateVersions: AlternateVersions;
  connections: Connections;
  soundtrack: Soundtrack;
  topQuestions: TopQuestions;
  faqs: Faqs;
  releaseDate: ReleaseDate2;
  countriesDetails: CountriesDetails;
  detailsExternalLinks: DetailsExternalLinks;
  spokenLanguages: SpokenLanguages;
  akas: Akas;
  filmingLocations: FilmingLocations;
  production: Production;
  companies: ExternalLinks;
  productionBudget: ProductionBudget;
  lifetimeGross: LifetimeGross;
  openingWeekendGross: OpeningWeekendGross;
  worldwideGross: LifetimeGross;
  technicalSpecifications: TechnicalSpecifications;
  runtime: Runtime;
  series: null;
  __typename: string;
}

interface TechnicalSpecifications {
  soundMixes: SoundMixes;
  aspectRatios: AspectRatios;
  colorations: AspectRatios;
  __typename: string;
}

interface AspectRatios {
  items: unknown[];
  __typename: string;
}

interface SoundMixes {
  items: Item[];
  __typename: string;
}

interface Item {
  id: string;
  text: string;
  attributes: unknown[];
  __typename: string;
}

interface OpeningWeekendGross {
  gross: LifetimeGross;
  weekendEndDate: string;
  __typename: string;
}

interface LifetimeGross {
  total: Budget;
  __typename: string;
}

interface ProductionBudget {
  budget: Budget;
  __typename: string;
}

interface Budget {
  amount: number;
  currency: string;
  __typename: string;
}

interface FilmingLocations {
  edges: Edge21[];
  total: number;
  __typename: string;
}

interface Edge21 {
  node: Node19;
  __typename: string;
}

interface Node19 {
  text: string;
  location: string;
  attributes: Node[];
  __typename: string;
}

interface Akas {
  edges: Edge[];
  __typename: string;
}

interface SpokenLanguages {
  spokenLanguages: CurrentProductionStage[];
  __typename: string;
}

interface DetailsExternalLinks {
  edges: Edge20[];
  total: number;
  __typename: string;
}

interface Edge20 {
  node: Node18;
  __typename: string;
}

interface Node18 {
  url: string;
  label: string;
  externalLinkRegion: Node | null;
  __typename: string;
}

interface CountriesDetails {
  countries: CurrentProductionStage[];
  __typename: string;
}

interface ReleaseDate2 {
  day: number;
  month: number;
  year: number;
  country: CurrentProductionStage;
  __typename: string;
}

interface Faqs {
  total: number;
  edges: Edge19[];
  __typename: string;
}

interface Edge19 {
  node: Node17;
  __typename: string;
}

interface Node17 {
  id: string;
  question: Value;
  __typename: string;
}

interface TopQuestions {
  total: number;
  edges: Edge18[];
  __typename: string;
}

interface Edge18 {
  node: Node16;
  __typename: string;
}

interface Node16 {
  attributeId: string;
  question: Value;
  __typename: string;
}

interface Soundtrack {
  edges: Edge17[];
  __typename: string;
}

interface Edge17 {
  node: Node15;
  __typename: string;
}

interface Node15 {
  text: string;
  comments: OriginalText[];
  __typename: string;
}

interface Connections {
  edges: Edge16[];
  __typename: string;
}

interface Edge16 {
  node: Node14;
  __typename: string;
}

interface Node14 {
  associatedTitle: AssociatedTitle;
  category: Node;
  __typename: string;
}

interface AssociatedTitle {
  id: string;
  releaseYear: ReleaseYear2;
  titleText: Node;
  originalTitleText: Node;
  series: null;
  __typename: string;
}

interface AlternateVersions {
  total: number;
  edges: Edge14[];
  __typename: string;
}

interface Quotes {
  edges: Edge15[];
  __typename: string;
}

interface Edge15 {
  node: Node13;
  __typename: string;
}

interface Node13 {
  lines: Line[];
  __typename: string;
}

interface Line {
  characters: Character2[] | null;
  text: null | string;
  stageDirection: null | string;
  __typename: string;
}

interface Character2 {
  character: string;
  name: Language;
  __typename: string;
}

interface Goofs {
  edges: Edge14[];
  __typename: string;
}

interface Edge14 {
  node: Node12;
  __typename: string;
}

interface Node12 {
  text: OriginalText;
  __typename: string;
}

interface Trivia {
  edges: Edge13[];
  __typename: string;
}

interface Edge13 {
  node: Node11;
  __typename: string;
}

interface Node11 {
  text: OriginalText;
  trademark: null;
  relatedNames: null;
  __typename: string;
}

interface MoreLikeThisTitles {
  edges: Edge12[];
  __typename: string;
}

interface Edge12 {
  node: Node10;
  __typename: string;
}

interface Node10 {
  id: string;
  titleText: Node;
  titleType: TitleType3;
  originalTitleText: Node;
  primaryImage: PrimaryImage;
  releaseYear: ReleaseYear;
  ratingsSummary: RatingsSummary;
  runtime: Runtime3;
  certificate: Certificate;
  canRate: CanRate;
  titleGenres: TitleGenres;
  __typename: string;
}

interface Runtime3 {
  seconds: number;
  __typename: string;
}

interface TitleType3 {
  id: string;
  text: string;
  canHaveEpisodes: boolean;
  displayableProperty: DisplayableProperty;
  __typename: string;
}

interface ReviewSummary {
  overall: Overall;
  themes: Theme[];
  __typename: string;
}

interface Theme {
  themeId: string;
  label: Category;
  sentiment: string;
  __typename: string;
}

interface Overall {
  medium: Medium;
  __typename: string;
}

interface Medium {
  value: OriginalText;
  __typename: string;
}

interface FeaturedReviews2 {
  edges: Edge11[];
  __typename: string;
}

interface Edge11 {
  node: Node9;
  __typename: string;
}

interface Node9 {
  id: string;
  author: Author3;
  summary: Summary;
  text: Text2;
  title: Language;
  authorRating: number;
  __typename: string;
}

interface Text2 {
  originalText: OriginalText;
  __typename: string;
}

interface OriginalText {
  plaidHtml: string;
  __typename: string;
}

interface Author3 {
  userId: string;
  username: Node;
  __typename: string;
}

interface AggregateRatingsBreakdown {
  histogram: Histogram;
  __typename: string;
}

interface Histogram {
  histogramValues: HistogramValue[];
  __typename: string;
}

interface HistogramValue {
  rating: number;
  voteCount: number;
  __typename: string;
}

interface Director {
  totalCredits: number;
  category: CurrentProductionStage;
  credits: Node4[];
  __typename: string;
}

interface Cast {
  total: number;
  edges: Edge10[];
  __typename: string;
}

interface Edge10 {
  node: Node8;
  __typename: string;
}

interface Node8 {
  name: Name3;
  attributes: Node[] | null;
  category: CurrentProductionStage;
  characters: Character[];
  episodeCredits: EpisodeCredits;
  __typename: string;
}

interface EpisodeCredits {
  total: number;
  yearRange: null;
  __typename: string;
}

interface Character {
  name: string;
  __typename: string;
}

interface Name3 {
  id: string;
  nameText: Node;
  primaryImage: Thumbnail2;
  __typename: string;
}

interface TitleType2 {
  id: string;
  canHaveEpisodes: boolean;
  __typename: string;
}

interface TitleMainImages {
  total: number;
  edges: Edge9[];
  __typename: string;
}

interface Edge9 {
  node: PrimaryImage;
  __typename: string;
}

interface VideoStrip {
  edges: Edge8[];
  __typename: string;
}

interface Edge8 {
  node: Node7;
  __typename: string;
}

interface Node7 {
  id: string;
  contentType: ContentType2;
  name: Category;
  runtime: Runtime2;
  thumbnail: Thumbnail2;
  __typename: string;
}

interface ContentType2 {
  displayName: Category;
  __typename: string;
}

interface RatingsSummary2 {
  topRanking: TopRanking;
  __typename: string;
  aggregateRating: number;
  voteCount: number;
  notificationText: null;
}

interface TopRanking {
  id: string;
  text: Category;
  rank: number;
  __typename: string;
}

interface PrestigiousAwardSummary {
  nominations: number;
  wins: number;
  award: Award;
  __typename: string;
}

interface Award {
  text: string;
  id: string;
  event: Language;
  __typename: string;
}

interface Top {
  id: string;
  productionStatus: ProductionStatus;
  externalLinks: ExternalLinks;
  metacritic: Metacritic;
  keywords: Keywords;
  credits: ExternalLinks;
  engagementStatistics: EngagementStatistics;
  titleText: Node;
  titleType: TitleType;
  originalTitleText: Node;
  certificate: Certificate;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: Runtime;
  canRate: CanRate;
  ratingsSummary: RatingsSummary;
  meterRanking: MeterRanking;
  series: null;
  isAdult: boolean;
  genres: Genres;
  interests: Interests;
  plot: Plot;
  plotContributionLink: PlotContributionLink;
  primaryImage: PrimaryImage;
  images: Images;
  videos: ExternalLinks;
  primaryVideos: PrimaryVideos;
  principalCredits: PrincipalCredit[];
  reviews: ExternalLinks;
  criticReviewsTotal: ExternalLinks;
  triviaTotal: ExternalLinks;
  subNavCredits: ExternalLinks;
  subNavReviews: ExternalLinks;
  subNavTrivia: ExternalLinks;
  subNavFaqs: ExternalLinks;
  subNavTopQuestions: ExternalLinks;
  titleGenres: TitleGenres;
  meta: Meta;
  castPageTitle: CastPageTitle;
  creatorsPageTitle: unknown[];
  directorsPageTitle: DirectorsPageTitle[];
  countriesOfOrigin: CountriesOfOrigin;
  production: Production;
  featuredReviews: FeaturedReviews;
  __typename: string;
}

interface FeaturedReviews {
  edges: Edge7[];
  __typename: string;
}

interface Edge7 {
  node: Node6;
  __typename: string;
}

interface Node6 {
  author: Author2;
  summary: Summary;
  text: Text;
  authorRating: number;
  submissionDate: string;
  __typename: string;
}

interface Text {
  originalText: Value;
  __typename: string;
}

interface Summary {
  originalText: string;
  __typename: string;
}

interface Author2 {
  nickName: string;
  __typename: string;
}

interface Production {
  edges: Edge6[];
  __typename: string;
}

interface Edge6 {
  node: Node5;
  __typename: string;
}

interface Node5 {
  company: Company;
  __typename: string;
}

interface Company {
  id: string;
  companyText: Node;
  __typename: string;
}

interface CountriesOfOrigin {
  countries: Language[];
  __typename: string;
}

interface DirectorsPageTitle {
  credits: Node4[];
  __typename: string;
}

interface CastPageTitle {
  edges: Edge5[];
  __typename: string;
}

interface Edge5 {
  node: Node4;
  __typename: string;
}

interface Node4 {
  name: Name2;
  __typename: string;
}

interface Meta {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
}

interface TitleGenres {
  genres: Genre[];
  __typename: string;
}

interface Genre {
  genre: Node;
  __typename: string;
}

interface PrincipalCredit {
  totalCredits: number;
  category: CurrentProductionStage;
  credits: Credit[];
  __typename: string;
}

interface Credit {
  name: Name2;
  attributes: null;
  __typename: string;
}

interface Name2 {
  nameText: Node;
  id: string;
  __typename: string;
}

interface PrimaryVideos {
  edges: Edge4[];
  __typename: string;
}

interface Edge4 {
  node: Node3;
  __typename: string;
}

interface Node3 {
  id: string;
  createdDate: string;
  isMature: boolean;
  runtime: Runtime2;
  name: Name;
  description: Name;
  timedTextTracks: unknown[];
  recommendedTimedTextTrack: null;
  thumbnail: Thumbnail2;
  primaryTitle: PrimaryTitle;
  playbackURLs: PlaybackURL[];
  contentType: ContentType;
  previewURLs: PlaybackURL[];
  __typename: string;
}

interface ContentType {
  id: string;
  displayName: Category;
  __typename: string;
}

interface PlaybackURL {
  displayName: Name;
  videoMimeType: string;
  videoDefinition: string;
  url: string;
  __typename: string;
}

interface PrimaryTitle {
  id: string;
  titleText: Node;
  originalTitleText: Node;
  releaseYear: ReleaseYear2;
  __typename: string;
}

interface ReleaseYear2 {
  year: number;
  __typename: string;
}

interface Thumbnail2 {
  url: string;
  height: number;
  width: number;
  __typename: string;
}

interface Name {
  value: string;
  language: string;
  __typename: string;
}

interface Runtime2 {
  value: number;
  __typename: string;
}

interface Images {
  total: number;
  edges: Edge3[];
  __typename: string;
}

interface Edge3 {
  node: Language;
  __typename: string;
}

interface PrimaryImage {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Value;
  __typename: string;
}

interface PlotContributionLink {
  url: string;
  __typename: string;
}

interface Plot {
  plotText: Value;
  language: Language;
  __typename: string;
}

interface Language {
  id: string;
  __typename: string;
}

interface Interests {
  edges: Edge2[];
  __typename: string;
}

interface Edge2 {
  node: Node2;
  __typename: string;
}

interface Node2 {
  id: string;
  primaryText: Node;
  __typename: string;
}

interface Genres {
  genres: CurrentProductionStage[];
  __typename: string;
}

interface MeterRanking {
  currentRank: number;
  rankChange: RankChange;
  __typename: string;
}

interface RankChange {
  changeDirection: string;
  difference: number;
  __typename: string;
}

interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
  __typename: string;
}

interface CanRate {
  isRatable: boolean;
  __typename: string;
}

interface Runtime {
  seconds: number;
  displayableProperty: DisplayableProperty;
  __typename: string;
}

interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  country: Node;
  __typename: string;
}

interface ReleaseYear {
  year: number;
  endYear: null;
  __typename: string;
}

interface Certificate {
  rating: string;
  __typename: string;
}

interface TitleType {
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: Category[];
  canHaveEpisodes: boolean;
  __typename: string;
}

interface Category {
  value: string;
  __typename: string;
}

interface DisplayableProperty {
  value: Value;
  __typename: string;
}

interface Value {
  plainText: string;
  __typename: string;
}

interface EngagementStatistics {
  watchlistStatistics: WatchlistStatistics;
  __typename: string;
}

interface WatchlistStatistics {
  displayableCount: Node;
  __typename: string;
}

interface Keywords {
  total: number;
  edges: Edge[];
  __typename: string;
}

interface Edge {
  node: Node;
  __typename: string;
}

interface Node {
  text: string;
  __typename: string;
}

interface Metacritic {
  metascore: Metascore;
  __typename: string;
}

interface Metascore {
  score: number;
  __typename: string;
}

interface ExternalLinks {
  total: number;
  __typename: string;
}

interface ProductionStatus {
  currentProductionStage: CurrentProductionStage;
  productionStatusHistory: ProductionStatusHistory[];
  restriction: null;
  __typename: string;
}

interface ProductionStatusHistory {
  status: CurrentProductionStage;
  __typename: string;
}

interface CurrentProductionStage {
  id: string;
  text: string;
  __typename: string;
}

interface Short {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: Review;
  aggregateRating: AggregateRating;
  contentRating: string;
  genre: string[];
  datePublished: string;
  keywords: string;
  trailer: Trailer;
  actor: Actor[];
  director: Actor[];
  creator: Creator[];
  duration: string;
}

interface Creator {
  '@type': string;
  url: string;
  name?: string;
}

interface Actor {
  '@type': string;
  url: string;
  name: string;
}

interface Trailer {
  '@type': string;
  name: string;
  embedUrl: string;
  thumbnail: Thumbnail;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: string;
}

interface Thumbnail {
  '@type': string;
  contentUrl: string;
}

interface AggregateRating {
  '@type': string;
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

interface Review {
  '@type': string;
  itemReviewed: ItemReviewed;
  author: Author;
  dateCreated: string;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating: ReviewRating;
}

interface ReviewRating {
  '@type': string;
  worstRating: number;
  bestRating: number;
  ratingValue: number;
}

interface Author {
  '@type': string;
  name: string;
}

interface ItemReviewed {
  '@type': string;
  url: string;
}

