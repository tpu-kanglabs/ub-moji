import type { DataRow } from "@/components/dataset/DataTable.astro";

export const metadata: DataRow[] = [
  {
    field: "file_name",
    type: "str",
    descriptionKey: "datasetTable.descriptions.fileName",
  },
  {
    field: "classes",
    type: "List[str]",
    descriptionKey: "datasetTable.descriptions.classes",
  },
  {
    field: "category",
    type: "int",
    descriptionKey: "datasetTable.descriptions.category",
  },
  {
    field: "participant_id",
    type: "int",
    descriptionKey: "datasetTable.descriptions.participantId",
  },
  {
    field: "recording_date",
    type: "int",
    descriptionKey: "datasetTable.descriptions.recordingDate",
  },
  {
    field: "fps",
    type: "int",
    descriptionKey: "datasetTable.descriptions.fps",
  },
];

export const participants: DataRow[] = [
  {
    field: "participant_id",
    type: "int",
    descriptionKey: "participantsTable.descriptions.participantId",
  },
  {
    field: "age_group",
    type: "str",
    descriptionKey: "participantsTable.descriptions.ageGroup",
  },
  {
    field: "gender",
    type: "int",
    descriptionKey: "participantsTable.descriptions.gender",
  },
  {
    field: "dominant_hand",
    type: "int",
    descriptionKey: "participantsTable.descriptions.dominantHand",
  },
  {
    field: "experience_years",
    type: "str",
    descriptionKey: "participantsTable.descriptions.experienceYears",
  },
  {
    field: "hearing_level",
    type: "int",
    descriptionKey: "participantsTable.descriptions.hearingLevel",
  },
  {
    field: "face_visibility",
    type: "int",
    descriptionKey: "participantsTable.descriptions.faceVisibility",
  },
];
