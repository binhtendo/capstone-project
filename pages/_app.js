import GlobalStyle from "@/styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import PlacesToVisitOverview from "@/components/placesToVisitOverview/placesToVisitOverview";

export default function App() {
  return (
    <div>
      <PlacesToVisitOverview />
    </div>
  );
}
